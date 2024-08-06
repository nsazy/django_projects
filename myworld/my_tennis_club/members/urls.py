from django.urls import path
from . import views

urlpatterns = [
   # path('', views.main, name='main'),
    path('', views.index, name='index'),
    path('add/', views.add, name='add'),
    path('add/addrecord/', views.addrecord, name='addrecord'),
    #path('members/', views.members, name='members'),
    path('details/<int:id>', views.details, name='details'),
    path('testing/', views.testing, name='testing'), 
]
