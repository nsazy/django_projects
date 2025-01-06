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
    path('subSubmit/', views.subSubmit, name='subSubmit'),
    path('subOne/', views.subOne, name='subOne'),
    path('subTwo/', views.subTwo, name='subTwo'),
    path('subThree/', views.subThree, name='subThree'),
    path('mulSubmit/', views.mulSubmit, name='mulSubmit'),
    path('mulOne/', views.mulOne, name='mulOne'),
    path('mulTwo/', views.mulTwo, name='mulTwo'),
    path('mulThree/', views.mulThree, name='mulThree'),
    path('divSubmit/', views.divSubmit, name='divSubmit'),
    path('divOne/', views.divOne, name='divOne'),
    path('divTwo/', views.divTwo, name='divTwo'),
    path('divThree/', views.divThree, name='divThree'),
    path('getResults/', views.getResults, name='getResults'),
    path('displayDivAnswers/', views.displayDivAnswers, name='displayDivAnswers'),

]

