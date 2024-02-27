from django.urls import path
from .views import EventDetail,EventList

urlpatterns = [
    path('<int:pk>/', EventDetail.as_view(), name = 'event_detail'),
    path("", EventList.as_view(), name = 'event_detail'),
]