from django.contrib import admin
from .models import ClientModel, client_details_logo, Position, ManpowerRequisition


admin.site.register(ClientModel)
admin.site.register(client_details_logo)
admin.site.register(Position)
admin.site.register(ManpowerRequisition)
