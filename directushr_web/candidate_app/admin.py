from django.contrib import admin
from .models import CandidateModel, CandidateAssesment, CandidateKeySkills, CandidateCheckListItems, CandidateJoiningConfirmation

admin.site.register(CandidateModel)
admin.site.register(CandidateAssesment)
admin.site.register(CandidateKeySkills)
admin.site.register(CandidateCheckListItems)
admin.site.register(CandidateJoiningConfirmation)
