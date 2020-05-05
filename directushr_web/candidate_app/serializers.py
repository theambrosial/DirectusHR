from django.contrib.auth import get_user_model, authenticate, login, logout
from rest_framework import serializers, exceptions

from .models import CandidateModel


class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CandidateModel
        fields = "__all__"
    



