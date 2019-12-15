from django.http import JsonResponse
from django.shortcuts import render

def char_count(request):
    text = request.GET.get("text", "")

    return JsonResponse({"count": len(text)})
