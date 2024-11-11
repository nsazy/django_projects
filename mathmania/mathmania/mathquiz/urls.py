from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('index', views.index, name='index'),
    path('register', views.register, name='register'),
    path('my_login', views.my_login, name='my_login'),
    path('user_logout/', views.user_logout, name="user_logout"),
    path('add/', views.add, name='add'),
    path('addTwo/', views.addTwo, name='addTwo'),
     path('addThree/', views.addThree, name='addThree'),
    path('submitSingAdd/', views.submitSingAdd, name='submitSingAdd'),
  

]

