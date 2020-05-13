from django.conf import settings
from django.contrib.auth import get_user_model, authenticate, login, logout
from rest_framework import serializers, exceptions
from rest_framework.fields import SerializerMethodField

from common_utilities.available_choices import Relations
from common_utilities.email_templates import CRMCreateMail
from common_utilities.email_utility import send_text_mail
from crm_app.models import CRMModel
from user_app.models import AddressModel, SiteUser, TaxationDetails
from user_app.serializers import UserSerializer

User = get_user_model()


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        username = attrs.get("username", "")
        password = attrs.get("password", "")

        if username and password:
            user = authenticate(username=username,password=password)
            if user:
                if user.is_active:
                    attrs["user"] = user
                else:
                    msg = "User is deactivated"
                    raise exceptions.ValidationError(msg)
            else:
                msg = "Unable to login with given credentials"
                raise exceptions.ValidationError(msg)
        else:
            msg = "Must Provide username and password both"
            raise exceptions.ValidationError(msg)
        return attrs


class TaxationSerializer(serializers.ModelSerializer):

    class Meta:
        model = TaxationDetails
        fields = [
            'id',
            'bank_name',
            'account_number',
            'ifsc_code',
            'pan_number',
            'gst_number'
        ]


class AddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = AddressModel
        fields = [
            'id',
            'address_line',
            'street',
            'landmark',
            'city',
            'district',
            'state',
            'zip_code',
            'country',
        ]


class CRMListSerializer(serializers.ModelSerializer):
    name = SerializerMethodField()

    class Meta:
        model = CRMModel
        fields = ["id", "name"]

    def get_name(self, obj):
        if obj.user_id:
            return obj.user_id.first_name + ' ' + obj.user_id.last_name


class CRMCreateSerializer(serializers.ModelSerializer):

    user_id = UserSerializer()
    reporting_manager_id = CRMListSerializer(required=False)
    office_location = AddressSerializer()
    home_location = AddressSerializer(required=False)
    taxation_details_id = TaxationSerializer()

    class Meta:
        model = CRMModel
        fields = [
            'id',
            'user_id',
            'personal_email',
            'emergency_contact_name',
            'emergency_contact_number',
            # Employee Details
            'relation_dhr',
            'reporting_manager_id',  # fk CRMModel
            'office_location',       # fk AddressModel
            'taxation_details_id',   # fk TaxationDetails
            # optional fields
            'total_experience',
            'fixed_salary',
            'home_location'          # fk AddressModel
        ]

    def create(self, validated_data):
        user_data = validated_data.pop('user_id')
        office_address_data = validated_data.pop('office_location')
        home_address_data = validated_data.pop('home_location', {})
        manager_data = validated_data.pop('reporting_manager_id', {})
        taxation_data = validated_data.pop('taxation_details_id')
        crm_obj = CRMModel(**validated_data)
        user_obj = SiteUser.objects.create(**user_data)
        office_address_obj = AddressModel.objects.create(**office_address_data)
        if home_address_data:
            home_location_obj = AddressModel.objects.create(**home_address_data)
            crm_obj.home_location = home_location_obj
        taxation_obj = TaxationDetails.objects.create(**taxation_data)
        crm_obj.user_id = user_obj
        crm_obj.office_location = office_address_obj
        crm_obj.reporting_manager_id_id = manager_data.get("id")
        crm_obj.taxation_details_id = taxation_obj
        crm_obj.on_roll_status = validated_data.get("relation_dhr") in Relations.ON_ROLL_RELATIONS
        crm_obj.save()
        send_text_mail(subject=CRMCreateMail.SUBJECT, message=CRMCreateMail.BODY, sender=settings.EMAIL_HOST_USER,
                       recipient=[crm_obj.user_id.email])
        return crm_obj


class CRMUpdateDeleteSerializer(serializers.ModelSerializer):

    user_id = UserSerializer(required=False)
    reporting_manager_id = CRMListSerializer(required=False)
    office_location = AddressSerializer(required=False)
    home_location = AddressSerializer(required=False)
    taxation_details_id = TaxationSerializer(required=False)

    class Meta:
        model = CRMModel
        fields = [
            'id',
            'user_id',
            'personal_email',
            'emergency_contact_name',
            'emergency_contact_number',
            # Employee Details
            'relation_dhr',
            'reporting_manager_id',  # fk CRMModel
            'office_location',       # fk AddressModel
            'taxation_details_id',   # fk TaxationDetails
            # optional fields
            'total_experience',
            'fixed_salary',
            'home_location'          # fk AddressModel
        ]

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user_id', {})
        office_address_data = validated_data.pop('office_location', {})
        home_address_data = validated_data.pop('home_location', {})
        manager_data = validated_data.pop('reporting_manager_id', {})
        taxation_data = validated_data.pop('taxation_details_id', {})
        user_obj = instance.user_id
        user_data.pop("id", None)
        for field, value in user_data.items():
            setattr(user_obj, field, value)
        user_obj.save()
        office_address_obj = instance.office_location
        office_address_data.pop("id", None)
        for field, value in office_address_data.items():
            setattr(office_address_obj, field, value)
        office_address_obj.save()
        home_address_obj = instance.home_location
        if not home_address_obj and home_address_data:
            home_address_obj = AddressModel.objects.create(**home_address_data)
            instance.home_location = home_address_obj
        elif home_address_data:
            home_address_data.pop("id", None)
            for field, value in home_address_data.items():
                setattr(home_address_obj, field, value)
            home_address_obj.save()
        manager_obj = instance.reporting_manager_id
        if not manager_obj and manager_data:
            instance.reporting_manager_id_id = manager_data.get("id")
        elif manager_data:
            for field, value in manager_data.items():
                setattr(manager_obj, field, value)
            manager_obj.save()
        taxation_obj = instance.taxation_details_id
        for field, value in taxation_data.items():
            setattr(taxation_obj, field, value)
        taxation_obj.save()
        for field, value in validated_data.items():
            setattr(instance, field, value)
        instance.save()
        return instance