from django.urls import path
from .views import TicketList, TicketDetail, ReservedList,ReservedDetail,submit_form
urlpatterns = [
    path("<int:pk>/", TicketDetail.as_view(), name="ticket_detail"),
    path("", TicketList.as_view(), name="ticket_list"),
    path('<int:pk/>', ReservedDetail.as_view(),name = 'reserved_detail'),
    path('',ReservedList.as_view(),submit_form,name='reseved_list')
]