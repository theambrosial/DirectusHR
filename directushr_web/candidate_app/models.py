from django.db import models
from django.utils import timezone
from model_utils import FieldTracker

from user_app.models import AddressModel, SiteUser, TaxationDetails
from common_utilities.available_choices import Relations, available_business_types, available_company_sizes, available_interview_status
from recruiter_app.models import RecruiterModel
from client_app.models import ClientModel
from client_app.models import Position

class CandidateModel(models.Model):
    user_id = models.ForeignKey(SiteUser,on_delete=models.CASCADE)
    candidate_cv = models.FileField(upload_to='candidate_cv/',null=True,blank=True)
    candidate_photo = models.ImageField(upload_to='candidate_photo/',null=True,blank=True)
    total_experience_years = models.IntegerField()
    total_experience_month = models.IntegerField()
    current_designation = models.CharField(max_length=50)
    current_fixed_salary_lakhs = models.FloatField()
    current_fixed_salary_thousand = models.FloatField()
    notice_period = models.IntegerField(default=0)
    gender = models.CharField(max_length=10,null=True,blank=True)
    address_line = models.CharField(max_length=30)
    street = models.CharField(max_length=20)
    landmark = models.CharField(max_length=20, null=True, blank=True)
    city = models.CharField(max_length=30)
    district = models.CharField(max_length=20, null=True, blank=True)
    state = models.CharField(max_length=30)
    zip_code = models.CharField(max_length=6)
    country = models.CharField(max_length=20)
    # candidate_home_location = models.ForeignKey(AddressModel,on_delete=models.CASCADE)
    reason_for_change= models.CharField(max_length=250,null=True,blank=True)
    intrested_industries = models.CharField(max_length=250,null=True,blank=True)
    intrested_function = models.CharField(max_length=250,null=True,blank=True)

    added_by_recruiter = models.ForeignKey(RecruiterModel, on_delete=models.CASCADE,null=True,blank=True)

    auto_timedate = models.DateTimeField(default=timezone.now)
    log_entered_by = models.CharField(blank= True, null=True, max_length=100)
    tracker = FieldTracker()


class CandidateAssesment(models.Model):
    candidate_id = models.ForeignKey(CandidateModel,on_delete=models.CASCADE)
    client_id = models.ForeignKey(ClientModel,on_delete=models.CASCADE)
    position_id = models.ForeignKey(Position , on_delete=models.CASCADE)
    disabled_candidate = models.BooleanField(default=False)
    disability_hiring = models.CharField(max_length=250)
    special_notes = models.TextField()
    first_int_status = models.CharField(max_length=20,default='Pending',choices=available_interview_status)
    second_int_status = models.CharField(max_length=20,default='Pending',choices=available_interview_status)
    third_int_status = models.CharField(max_length=20,default='Pending',choices=available_interview_status)
    fourth_int_status = models.CharField(max_length=20,default='Pending',choices=available_interview_status)
    offer_status = models.CharField(max_length=15,choices=(('Pending', 'Pending'),('Accepted','Accepted'),('Joined', 'Joined'),('On Hold', 'On Hold'),))
    joining_status = models.CharField(max_length=15,choices=(('Pending', 'Pending'),('Joined', 'Joined'),('On Hold', 'On Hold'),))
    auto_timedate = models.DateTimeField(default=timezone.now)
    log_entered_by = models.CharField(blank=True, null=True, max_length=100)
    tracker = FieldTracker()

class CandidateKeySkills(models.Model):
    candidate_assesment_id = models.ForeignKey(CandidateAssesment,on_delete=models.CASCADE)
    skill_name = models.CharField(max_length=50)
    skill_score = models.IntegerField()

class CandidateCheckListItems(models.Model):
    candidate_assesment_id = models.ForeignKey(CandidateAssesment,on_delete=models.CASCADE)
    type = models.CharField(max_length=20,choices=(('Functional','Functional'),('HR','HR'),))
    item_name = models.CharField(max_length=280)

class CandidateJoiningConfirmation(models.Model):
    client_id = models.ForeignKey(ClientModel,on_delete=models.CASCADE)
    candidate_id = models.ForeignKey(CandidateModel,on_delete=models.CASCADE)
    salary_candidate_lakh = models.FloatField()
    salary_candidate_thousand = models.FloatField()
    joining_date = models.DateField()
    invoice_date = models.DateField()
    payment_due_date = models.DateField()
    dhr_fee_structure = models.CharField(max_length=15,choices=(('Fixed Amount','Fixed Amount'),('% Of CTC','% Of CTC'),))
    dhr_fee_amt = models.FloatField()
    invoice_notes = models.TextField()
