/*
Express es una infraestructura web de direccionamiento y middleware que tiene una funcionalidad mínima propia: una aplicación Express es fundamentalmente una serie de llamadas a funciones de middleware.

Las funciones de middleware son funciones que tienen acceso al objeto de solicitud (req), al objeto de respuesta (res) y a la siguiente función de middleware en el ciclo de solicitud/respuestas de la aplicación. La siguiente función de middleware se denota normalmente con una variable denominada next.

https://expressjs.com/es/guide/using-middleware.html

start -> npm run dev
*/

// const express = require('express'); --> old commonJS
import express from "express";
import router from "./router/index.js";
import db from "./config/db.js";

const app = express();

// BBDD
db.authenticate()
    .then( () => console.log('💾 Data Base -> ✅'))
    .catch(error => console.log(error));

// Puerto
const port = process.env.port || 4000;

// Public folder access
app.use(express.static('public'));
app.use('/viajes',express.static('public'));

// Pug
app.set("view engine", "pug");

// Actual Year
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear(); 
    res.locals.appName = "Agencia de Viajes";
    return next(); // Siguiente midlleware 
})

// Parser para leer datos post (formulario)
app.use(express.urlencoded({ extended: true }));

// Roting
app.use('/', router);

app.listen(port, () => console.log(`El servidor está funcionando 🚀 en http://localhost:${port}`))