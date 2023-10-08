<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

Este proyecto fue generado con el framework nest.js

## Despliegue
1. Clonar proyecto con el siguiente comando:
```bash
git clone https://github.com/alexgm5555/nest_api_fh.git
```
2. Instalar Dependencias
```bash
npm  install
```
3. El proyecto lleva el archivo de variables de entorno(.env), no se recomienda esto en producción, para este caso es más útil dejarlo en el repositorio (En caso de no encontrarlo solicitarlo).
4. Iniciar la app docker Desktop (la puede descargar en https://www.docker.com/products/docker-desktop/) 
5. Levantar el servidor de base de datos con el siguiente comando (base de datos postgres)
```bash
docker-compose up -d
```
6. levantar el proyecto con el comando
```bash
npm run start:dev
```

### Recomendaciones
1. La versión de node que se utilizó para desarrollar este proyecto fue:
```v16.13.0```\  Recomendamos hacer el despliegè con esa versión.
2. La version de Docker Desktop que se utilizó fue : ```v4.15.0```

## EndPint
7. Los EndPoint Disponibles son:
Autenticación por autorization barer Token
```
GET  http://localhost/api/users //Crea usuarios
POST http://localhost/api/users  //Lista de usuarios registrados en el ambiente local
```
