from rest_framework.generics import CreateAPIView, ListAPIView
from django.http import HttpResponse, JsonResponse
import json
from .models import Cards
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
from .serializers import CardSerializer

class CardsViews(CreateAPIView, ListAPIView):
    queryset = Cards.objects.all()
    serializer_class = CardSerializer

def process(request):
    cards = Cards.objects.all()
    print(cards)
    res = [c.to_dict() for c in cards]
    print(res)
    return JsonResponse({'status': 'ok', 'data': res})

@csrf_exempt
def add_card(request):
    data = json.loads(request.body)
    c = Cards(name=data['name'],
              title=data['title'],
              tag=data['tag'],
              price=data['price'],
              address=data['address'])
    c.save()
    return JsonResponse({'status': 'ok', 'data': None})
