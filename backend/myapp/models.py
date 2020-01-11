from django.db.models import *


# Create your models here.
class Cards(Model):
    name = CharField(max_length=256)
    def to_dict(self):
        return{
            'id':self.id,
            'name':self.name,
        }