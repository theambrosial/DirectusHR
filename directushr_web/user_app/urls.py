from django.contrib import admin
from django.urls import path, re_path, include
from django.conf.urls.static import static
from .views import index, LoginView, LogoutView, RegisterationRequest
urlpatterns = [
    path('', index, name ='index'),
    path('api/v1/auth',include('rest_framework.urls')),
    path('api/auth/login/',LoginView.as_view()),
    path('api/auth/logout/',LogoutView.as_view()),
    path('api/registration_request/',RegisterationRequest.as_view()),

]

urlpatterns += [

    re_path(r'^(?:.*)/?$', index),
]
