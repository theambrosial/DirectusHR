from django.contrib.auth import get_user_model, authenticate, login, logout
from django.db.models import Q
from django.urls import reverse
from django.utils import timezone

from rest_framework import serializers, exceptions


User = get_user_model()


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        username = attrs.get("username","")
        password = attrs.get("password","")
        print("username")
        print(username)
        print(password)

        if username and password:
            user = authenticate(username=username,password=password)
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
    



