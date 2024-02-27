from rest_framework import serializers
from .models import Ticket

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'ticket_type',
            'price',
        )
        model = Ticket