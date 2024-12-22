from django.shortcuts import render
from main import views  # Asegúrate de que esto sea así
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


def index(request):
    return render(request, 'index.html')

@csrf_exempt
def chatbot(request):
    if request.method == "POST":
        data = json.loads(request.body)
        user_message = data.get("message", "").lower()

        # Respuestas básicas
        responses = {
            "hola": "¡Hola! ¿En qué puedo ayudarte?",
            "adiós": "¡Hasta luego! 😊",
            "¿cómo estás?": "¡Estoy bien! Soy solo un bot, pero gracias por preguntar.",
        }

        bot_reply = responses.get(user_message, "No entiendo ese mensaje. 😅")
        return JsonResponse({"reply": bot_reply})