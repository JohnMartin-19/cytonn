from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from .models import Ticket,Reserved
from .serializers import TicketSerializer,ReseverdSerializer

class TicketList(generics.ListCreateAPIView):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer

class TicketDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer

class ReservedList(generics.ListCreateAPIView):
    queryset = Reserved.objects.all()
    serializer_class = ReseverdSerializer
class  ReservedDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reserved.objects.all()
    serializer_class=ReseverdSerializer
    
@api_view(['GET','POST'])
def make_reservation(request,format=None):
    if request.method == 'GET':
        reservations = Reserved.objects.all()
        serializer = ReseverdSerializer(reservations, many=True)
        return Response(serializer.data)
    elif request.method=='POST':
        serializer = ReseverdSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PATCH','DELETE','PUT'])
def  reservation_detail(request,pk,format = None):
    try:
        reservation = Reserved.objects.get(id=pk)
    except Reserved.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = ReseverdSerializer(reservation)
        return Response(serializer.data)
    elif request.method == 'PATCH': #update
        partial_update = True
        serializer = ReseverdSerializer(reservation, data=request.data,partial=partial_update)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == "DELETE":#delete
        reservation.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)