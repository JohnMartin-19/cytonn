from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import make_reservation,reservation_detail
urlpatterns = [
    path('<int:pk>/', reservation_detail,name = 'reserved_detail'),
    path('',make_reservation,name='reseved_list')
]
urlpatterns = format_suffix_patterns(urlpatterns)  # to allow requests with