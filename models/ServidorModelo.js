//Se trae el paquete express
const express = require('express');

//Se traen las rutas
const rutas=require('../routes/rutasFutbolistas.js');

//Se trae la conexion a BD
const { conectarBD }=require('../database/conexion.js');


class ServidorModelo {


    constructor(){

        //Atributo(variable) global para configurar el servidor
        this.app=express();
        this.despertarBaseDatos();
        this.llamarRutasAPI();

    }

    //METODOS (QUE ACCIONES HACE MI SERVIDOR)

    despertarServidor(){

        //Leventamiento del servidor (abrimos el restaurante)
        this.app.listen(process.env.PORT,function(){
            console.log(`Estoy conectado al puerto ${process.env.PORT}`);
        });

    }

    llamarRutasAPI(){

        this.app.use('/',rutas);

    }

    despertarBaseDatos(){
        conectarBD();
    }


}

module.exports=ServidorModelo;