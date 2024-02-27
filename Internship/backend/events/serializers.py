from rest_framework import serializers
from .models import  Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'location',
            'image',
            'start_date',
            'end_date',
            'attendees',
            'description',
        )
        model = Event