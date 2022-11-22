# Multiples Servicios

Realizado por:

- Daniel Morales
- Nicole Capote

# Como ejecutar

- Clonar el proyecto
- cd proyecto
- cd api
- Si vas a trabajar localmente sin correr los contenedores, puedes solamente correr el servicio de la BD de docker y en el archivo .env de la api, cambiar a **DB_HOST**="localhost" y **FAKER_HOST**="http://localhost"
- Si quieres correr todo y probar de una vez el funcionamiento correr, **docker-compose up -d --build**
- Hay dos fronts, el contenedor que tiene el proyecto en react y el contenedor que tiene el proyecto en vanilla JS

# Como ejecutar los tests

Con el servidor del backend pausado:

- cd api
- npm run test

# Como iniciar solamente el backend

- npm i
- npm run start

# Como iniciar faker api

- python3 -m pip install Flask
- python3 -m pip install Faker
- python3 api.py

# Como iniciar el front

- npm i
- npm start

## Notas

- Solamente el API de NodeJS cuenta con test, los tests corren correctamente cuando el sv esta off, ya que utilizan la misma instancia de la app para correrse.
- Se reutilizo el trabajo anterior porque al menos el 90% ya estaba realizado (Gestor de paquetes, BD, API)
- Se agregaron: tests, se llevo el servicio web a ReactJS
