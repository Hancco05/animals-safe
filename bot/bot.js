// Archivo: bot.js

const axios = require("axios");

// URL de la API de tu proyecto Django
const apiUrl = "http://127.0.0.1:8000/api/saludo/"; // Cambia esto por tu URL real

async function obtenerSaludo() {
    try {
        const respuesta = await axios.get(apiUrl);
        console.log("Respuesta del servidor Django:", respuesta.data);
    } catch (error) {
        console.error("Error al conectar con el servidor:", error.message);
    }
}

// Ejecutar el bot
console.log("Bot iniciado...");
obtenerSaludo();

