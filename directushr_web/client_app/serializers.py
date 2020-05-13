from django.contrib.auth import get_user_model, authenticate, login, logout
from rest_framework import serializers, exceptions

from .models import ClientModel


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = ClientModel
        fields = [
            'url',
            'slug',
            'user',
            'title',
            'content',
            'draft',
            'publish',
            'updated',
            'owner',
            'timestamp',
        ]
    



