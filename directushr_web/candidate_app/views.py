from django.shortcuts import render
from rest_framework.authentication import TokenAuthentication,SessionAuthentication
from rest_framework import generics

from .models import CandidateModel
from .serializers import CandidateSerializer


class CandidateAddRequest(generics.ListCreateAPIView):
    # authentication_classes = (TokenAuthentication, SessionAuthentication)
    queryset = CandidateModel.objects.all()
    serializer_class = CandidateSerializer

def cendidate_add_edit(request):

    return render(request,'candidate/candidet_add_edit.html')