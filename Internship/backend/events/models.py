from django.db import models

# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=100)
    location = models.CharField(max_length = 100)
    image = models.ImageField(upload_to='event_images/')
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    attendees = models.PositiveIntegerField(null = False)
    description = models.TextField()
    
    def __str__(self):
        return self.title + " | " + str(self.location)