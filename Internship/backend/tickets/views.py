from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
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

    @csrf_exempt
    def submit_form(request):
        if request.method == 'POST':
            data = request.POST # Or request.body for JSON data
            # Process form data, save to database, etc.
            return JsonResponse({'message': 'Form submitted successfully'})
        else:
            return JsonResponse({'error': 'Invalid request method'})

class  ReservedDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reserved.objects.all()
    serializer_class=ReseverdSerializer
    
    