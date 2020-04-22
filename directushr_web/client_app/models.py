from django.db import models
from django.utils import timezone
from model_utils import FieldTracker

from user_app.models import AddressModel, SiteUser, TaxationDetails
from common_utilities.available_choices import available_relations, available_business_types, available_company_sizes

from crm_app.models import CRMModel


class ClientModel(models.Model):
# required fields
    # presonal Info
    user_id = models.ForeignKey(SiteUser,on_delete=models.CASCADE)
    crm_assigned = models.ForeignKey(CRMModel,on_delete=models.CASCADE)
    company_name = models.CharField(max_length=30)
    business_entity_type = models.CharField(choices=available_business_types,max_length=50)
    client_location = models.ForeignKey(AddressModel, related_name='client_location', on_delete=models.CASCADE)
    billing_address = models.ForeignKey(AddressModel, related_name='billing_address', on_delete=models.CASCADE)
    taxation_details_id = models.ForeignKey(TaxationDetails, on_delete=models.CASCADE)
    industry = models.CharField(max_length=50)

    hr_person_name = models.CharField(max_length=30)
    hr_person_mobile = models.CharField(max_length=30)
    hr_person_email = models.EmailField(max_length=40)

    ceo_name = models.CharField(max_length=30)
    ceo_mobile = models.CharField(max_length=30)
    ceo_email = models.EmailField(max_length=40)
    company_size = models.CharField(max_length=25, choices=available_company_sizes)

    about_company = models.TextField()
    products_services = models.TextField()
    employee_benifit = models.CharField(max_length=200)
    company_branding = models.CharField(max_length=250)     #Why Should Candidate Work For You? in excel provided by client

    auto_timedate = models.DateTimeField(default=timezone.now)
    log_entered_by = models.CharField(blank= True, null=True, max_length=100)
    tracker = FieldTracker()



class client_details_logo(models.Model):
    client_id = models.ForeignKey(ClientModel,on_delete=models.CASCADE)
    company_name = models.CharField(max_length=200)
    company_logo = models.ImageField(upload_to='client_details_logo/', blank=True)