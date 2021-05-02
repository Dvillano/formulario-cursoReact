const express = require("express");
const app = express();

app.use(express.urlencoded());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send(__dirname + "/public/index.html")
})

app.post("/form", (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const edad = req.body.edad;
    const telefono = req.body.telefono;
    const paisNacimiento = req.body.paisNacimiento;
    const paisResidencia = req.body.paisResidencia;
    const html = '<!DOCTYPE html> <html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="style.css"><title>Formulario de registro</title></head><body><div id="container"><p>Nombre:</p>' + nombre + '<p>Apellido: </p>'+ apellido + '<p>Edad: </p>'+ edad + '<p>Numero de telefono: </p>'+ telefono + '<p>Pais de Nacimiento: </p>'+ paisNacimiento + '<p>Pais de Residencia: </p>'+ paisResidencia + '<p></p><button><a href="/">Volver al registro</a></button></div></body></html>'
    res.send(html);
})

app.get("*", (req,res) => {
    res.redirect("/");
}) 

app.listen(3000, () => {
    console.log("Server iniciado en puerto 3000");
})