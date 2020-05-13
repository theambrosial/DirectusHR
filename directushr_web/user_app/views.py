from django.contrib.auth import login, logout
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from .models import SiteUser
from .serializers import LoginSerializer, UserSerializer


@ensure_csrf_cookie
def index(request):
    return render(request, 'index.html')


class LoginView(APIView):

    authentication_classes = []
    permission_classes = []

    def post(self, request):
        seralizer = LoginSerializer(data=request.data)
        seralizer.is_valid(raise_exception=True)
        user = seralizer.validated_data["user"]
        login(request, user)
        token, created = Token.objects.get_or_create(user=user)
        return Response({"token": token.key}, status=200)


class LogoutView(APIView):

    def post(self, request):
        logout(request)
        return Response(status=204)


class RegisterationRequest(generics.ListCreateAPIView):
    # authentication_classes = (TokenAuthentication, SessionAuthentication)
    queryset = SiteUser.objects.all()
    serializer_class = UserSerializer
