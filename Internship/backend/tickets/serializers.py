from rest_framework import serializers
from .models import Ticket,Reserved

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'ticket_type',
            'price',
        )
        model = Ticket

class ReseverdSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'name',
            'email',
            'phone_number',
            'tickets',
            )
        model = Reserved