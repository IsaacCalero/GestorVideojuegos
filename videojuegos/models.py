from django.db import models

class Videojuego(models.Model):
    titulo = models.CharField(max_length=100)
    plataforma = models.CharField(max_length=50)
    estado = models.CharField(max_length=30)
    fecha_agregado = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo
