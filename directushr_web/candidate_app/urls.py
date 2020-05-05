from django.urls import path, re_path
from .views import CandidateAddRequest, cendidate_add_edit

urlpatterns = [

    path('api/add_candidate/',CandidateAddRequest.as_view()),
    path('add_edit_candidate/',cendidate_add_edit),

]
