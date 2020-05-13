from django.urls import path

from crm_app.views import CRMRetrieveUpdateDestroy, CRMCreate, CRMList

urlpatterns = [
    path('create/', CRMCreate.as_view(), name='list_create_crm'),
    path('list/', CRMList.as_view(), name='list_create_crm'),
    path('edit/<int:pk>/', CRMRetrieveUpdateDestroy.as_view(), name='create_crm'),
]
