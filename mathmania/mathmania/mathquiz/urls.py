from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page, name='home_page'),
    path('add/', views.add, name='add'),
    path('submitSingAdd/', views.submitSingAdd, name='submitSingAdd'),
  

]

