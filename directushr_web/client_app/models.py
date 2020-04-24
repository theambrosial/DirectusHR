from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.utils import timezone
from model_utils import FieldTracker

from user_app.models import AddressModel, SiteUser, TaxationDetails
from common_utilities.available_choices import available_relations, available_business_types, available_company_sizes
from crm_app.models import CRMModel
from recruiter_app.models import RecruiterModel


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


class client_details_logo(models.Model): #to show ClientModel clientele
    client_id = models.ForeignKey(ClientModel,on_delete=models.CASCADE)
    company_name = models.CharField(max_length=200)
    company_logo = models.ImageField(upload_to='client_details_logo/', blank=True)

class Position(models.Model):
    client_id =models.ForeignKey(ClientModel,on_delete=models.CASCADE)
    name = models.CharField(max_length=90)
    recruiter_id = models.ForeignKey(RecruiterModel,on_delete=models.CASCADE)
    notes_recruiter = models.TextField()
    recruiter_fee_structure = models.CharField(max_length=15,
                                         choices=(('Fixed Amount', 'Fixed Amount'), ('% Of CTC', '% Of CTC'),))
    recruiter_fee_amt = models.FloatField()


class ManpowerRequisition(models.Model):
    client_id = models.ForeignKey(ClientModel,on_delete=models.CASCADE)
    depart_name = models.CharField(max_length=250)
    position_id = models.ForeignKey(Position, on_delete=models.CASCADE)
    min_yoe = models.IntegerField()
    min_moe = models.IntegerField()
    max_yoe = models.IntegerField()
    max_moe = models.IntegerField()
    min_offered_salary_lakhs = models.FloatField()
    min_offered_salary_thousand = models.FloatField()
    max_offered_salary_lakhs = models.FloatField()
    max_offered_salary_thousand = models.FloatField()
    expected_edu_qualification = models.TextField()
    target_industry = ArrayField(models.CharField(max_length=20,null=True,blank=True))
    position_type = models.CharField(choices=available_relations,max_length=20)
    on_roll_status = models.BooleanField()  # True = On Roll & False = Off Role
    function = models.CharField(max_length=90)
    position_level = models.CharField(max_length=25)
    position_location = models.ForeignKey(AddressModel,on_delete=models.CASCADE)
    key_responsibilities = ArrayField(models.CharField(max_length=20,null=True,blank=True))
    key_skills = ArrayField(models.CharField(max_length=20,null=True,blank=True))
    gender_preference = models.CharField(max_length=20)
    is_disability_hiring = models.BooleanField()
    disability_hiring = models.CharField(max_length=30)
    working_days = ArrayField(models.CharField(max_length=20,null=True,blank=True))
    working_time_from = models.TimeField()
    working_time_to = models.TimeField()
    no_of_vacancies = models.IntegerField()
    expected_closure_days = models.IntegerField()
    reporting_manager_name = models.CharField(max_length=25)
    reporting_manager_contact_no = models.CharField(max_length=10)
    reporting_manager_email_id = models.EmailField(max_length=30)
    functional_checklist = ArrayField(models.CharField(max_length=20,null=True,blank=True))
    hr_checklist = ArrayField(models.CharField(max_length=20,null=True,blank=True))
    special_position_notes = models.TextField()
    dhr_fee_structure = models.CharField(max_length=15,
                                         choices=(('Fixed Amount', 'Fixed Amount'), ('% Of CTC', '% Of CTC'),))
    dhr_fee_amt = models.FloatField()
    dhr_fee_credit_period = models.IntegerField()





