from django.urls import path
from .views import TicketList, TicketDetail
urlpatterns = [
    path("<int:pk>/", TicketDetail.as_view(), name="ticket_detail"),
    path("", TicketList.as_view(), name="ticket_list"),
]