from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views import View
from .models import Cards
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

def process(request):
    cards = Cards.objects.all()
    print(cards)
    res = [c.to_dict() for c in cards]
    print(res)
    return JsonResponse({'status': 'ok', 'data': res})

@csrf_exempt
def add_card(request):
    data = json.loads(request.body)
    c = Cards(name=data['name'])
    c.save()
    return JsonResponse({'status': 'ok', 'data': None})
