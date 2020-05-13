from django.db import models
from django.utils import timezone
from model_utils import FieldTracker

from user_app.models import AddressModel, SiteUser, TaxationDetails
from common_utilities.available_choices import Relations


class CRMModel(models.Model):
    # required fields
    # presonal Info
    user_id = models.ForeignKey(SiteUser, on_delete=models.CASCADE)
    personal_email = models.EmailField(max_length=50)
    emergency_contact_name = models.CharField(max_length=30)
    emergency_contact_number = models.CharField(max_length=10)
    # Employee Details
    relation_dhr = models.CharField(choices=Relations.available_relations, max_length=50)  # Relation With DirectusHR
    on_roll_status = models.BooleanField(default=False)  # True = On Roll & False = Off Role
    reporting_manager_id = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)
    office_location = models.ForeignKey(AddressModel, related_name='Address1', on_delete=models.CASCADE)
    taxation_details_id = models.ForeignKey(TaxationDetails, on_delete=models.CASCADE)
    # optional fields
    total_experience = models.FloatField(default=0.0, null=True, blank=True)
    fixed_salary = models.FloatField(default=0.0, null=True, blank=True)
    is_deleted = models.BooleanField(default=False)
    home_location = models.ForeignKey(AddressModel, related_name='Address2', on_delete=models.CASCADE, null=True,
                                      blank=True)
    auto_timedate = models.DateTimeField(default=timezone.now)
    log_entered_by = models.CharField(blank=True, null=True, max_length=100)
    tracker = FieldTracker()


class CRMExitLog(models.Model):
    crm = models.ForeignKey(CRMModel, on_delete=models.CASCADE)
    reason_of_exit = models.CharField(max_length=256)
    date_of_exit = models.DateField()
    admin_notes = models.TextField()
