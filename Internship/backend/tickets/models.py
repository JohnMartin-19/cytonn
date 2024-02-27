from django.db import models
from events.models import Event
# Create your models here.
class Ticket(models.Model):
    TICKET_TYPES = (
        ('VIP', 'VIP'),
        ('Regular', 'Regular'),
    )
    title = models.ForeignKey(Event, on_delete = models.CASCADE)
    ticket_type = models.CharField(max_length=10, choices=TICKET_TYPES)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def save(self, *args, **kwargs):
        # Set price based on ticket type
        if self.ticket_type == 'VIP':
            self.price = 2000
        elif self.ticket_type == 'Regular':
            self.price = 1000
        super(Ticket, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.ticket_type} Ticket - KSH{self.price} | {self.title}"