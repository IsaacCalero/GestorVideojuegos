from django.shortcuts import render, redirect
from .models import Videojuego

def inicio(request):
    return render(request, 'videojuegos/inicio.html')

def agregar(request):
    if request.method == 'POST':
        Videojuego.objects.create(
            titulo=request.POST['titulo'],
            plataforma=request.POST['plataforma'],
            estado=request.POST['estado']
        )
        return redirect('coleccion')
    return render(request, 'videojuegos/agregar.html')

def coleccion(request):
    juegos = Videojuego.objects.all()
    return render(request, 'videojuegos/coleccion.html', {'juegos': juegos})
