from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('agregar/', views.agregar, name='agregar'),
    path('coleccion/', views.coleccion, name='coleccion'),
]