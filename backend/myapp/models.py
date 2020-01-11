from django.db.models import *




# Create your models here.
class Cards(Model):
    name = CharField(max_length=256)
    address = CharField(max_length=256)
    tag = CharField(max_length=256)
    title = CharField(max_length=256)
    price = CharField(max_length=256)
    def to_dict(self):
        return{
            'id':self.id,
            'name':self.name,
            'address':self.address,
            'title':self.title,
            'price':self.price,
            'tag':self.tag,
        }