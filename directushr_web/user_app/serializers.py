from django.contrib.auth import get_user_model, authenticate, login, logout
from rest_framework import serializers, exceptions

from client_app.models import ClientModel

from user_app.models import SiteUser

User = get_user_model()


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        username = attrs.get("username", "")
        password = attrs.get("password", "")

        if username and password:
            user = authenticate(username=username, password=password)
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


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteUser
        fields = [
            'id',
            'first_name',
            'last_name',
            'mobile',
            'country_code_mobile',
            'email',
            'user_role',
            'is_client',
            'is_inhouse_rec',
            'is_outside_rec',
            'is_client_res_manager',
            'is_candidate',
            'auto_timedate',
        ]