Aun no tiene autorizaciones....trabajr en ello

En la siguiente direccion es donde crea un nuevo usuario con el metodo post
mandandolo como raw en un json
http://localhost:3000/users/signup

Para logearse se debe usar metodo post con el email y la contraseña de un usuario existente que haya sido 
creado despues de modificar la autenticacion con hash con bcrypt, porque si no dara error de usuario o
password no valido
http://localhost:3000/users/login



Para obtener la lista de usuarios existentes se usa el metodo get
http://localhost:3000/users

Para actualizar un usuario, solo puede actualizar si en los headers esta indicado userid: <_id de usaurio>
se manda igual como raw en un json con el metodo put
http://localhost:3000/users/<_id de usuario>


Para borrar un usuario solo puede eliminarse a si mismo el usuario
http://localhost:3000/users/<_id de usuario>


//TODO opcional crear un endpoint para crear publicaciones con 2 simples parametros
titulo y contenido que este conectado a un a coleccion en la base de datos de mongo, como en el clon de dev.to

y que solo el autor de dicho post(publicacion) pueda borrarla

TODO: organizar el front
TODO intentar hacer fetch 

////Instalar dependencias
en terminal en la base del backend los siguientes comandos
npm init
npm i express
npm i nodemon
npm i mongoose
npm i dotenv
npm i bcrypt // si se va a utilizar encriptado

revisar archivo package.json y que quede con las sigiente config

{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js",//agregar esta configuracion
    "dev": "nodemon --watch . ./app.js" //depdende del nombre del archivo
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.1",
    "dotenv": "^16.4.5",
    "express": "^4.18.3",
    "mongoose": "^8.2.1",
    "nodemon": "^3.1.0"
  }
}

revisar en ./src/db/db la condiguracionde conexion con la base de datos y el archivo .env
por ultimo revisar que el puerto este libre