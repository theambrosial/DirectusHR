from django.contrib.auth import login, logout
from django.shortcuts import render
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import LoginSerializer


def index(request):
    return render(request,'react.html')

class LoginView(APIView):

    def post(selfself, request):
        seralizer = LoginSerializer(data=request.data)
        seralizer.is_valid(raise_exception=True)
        user = seralizer.validated_data["user"]
        login(request,user)
        token , created = Token.objects.get_or_create(user=user)
        return Response({"token":token.key}, status =200)


class LogoutView(APIView):
    authentication_classes = (TokenAuthentication,)
    def post(selfself, request):
        print("Logout")
        print("Logout")

        logout(request)
        return Response(status=204)