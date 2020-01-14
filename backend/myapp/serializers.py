from rest_framework.serializers import ModelSerializer
from . import models

class CardSerializer(ModelSerializer):
    class Meta:
        model = models.Cards
        fields = ('id', 'name', 'address', 'title', 'price', 'tag')