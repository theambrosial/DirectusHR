import logging
import traceback
from copy import deepcopy

from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework import exceptions
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView, ListAPIView
from rest_framework.response import Response

from crm_app.models import CRMModel, CRMExitLog
from crm_app.serializers import CRMCreateSerializer, CRMUpdateDeleteSerializer, CRMListSerializer

logger = logging.getLogger(__name__)


@ensure_csrf_cookie
def index(request):
    return render(request, 'public/index.html')


class CRMCreate(CreateAPIView):
    queryset = CRMModel.objects.filter(is_deleted=False)
    serializer_class = CRMCreateSerializer


class CRMList(ListAPIView):
    queryset = CRMModel.objects.filter(is_deleted=False)
    serializer_class = CRMListSerializer


class CRMRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = CRMModel.objects.filter(is_deleted=False)
    serializer_class = CRMUpdateDeleteSerializer

    def destroy(self, request, *args, **kwargs):
        try:
            crm_obj = self.get_object()
            crm_obj.is_deleted = True
            crm_obj.save()
            request_data = deepcopy(request.data)
            request_data.update({"crm_id": crm_obj.id})
            exit_log_obj = CRMExitLog.objects.create(**request_data)
        except Exception as e:
            logger.info(f"Error while removing CRM: {traceback.format_exc()}")
            raise exceptions.ValidationError({"error": str(e)})
        print(crm_obj)
        return Response(CRMUpdateDeleteSerializer(self.get_object()).data)
