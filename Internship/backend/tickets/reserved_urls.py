from django.urls import path
from .views import  ReservedList,ReservedDetail
urlpatterns = [
    path('<int:pk>/', ReservedDetail.as_view(),name = 'reserved_detail'),
    path('',ReservedList.as_view(),name='reseved_list')
]