from django.urls import path
from . import views

urlpatterns = [
    path('', views.mathquiz, name='mathquiz'),
]

