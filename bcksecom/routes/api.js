const express = require('express');
const router = express.Router();

// para que es necesario router
// R es el mecanismo que permite registrar rutas
//   y controladores (handlers) para el servidor
//   web.

//configurar las rutas en router
//Métodos de registro
//get  --- consulta --- select
//post --- crear recursos --- insert
//put  --- actualizar un recurso --- update
//delete  --- borrar un recurso --- delete
//-----------------------------------------

//dos parámetros
//1) path: constante (texto) de una ruta -- toda ruta debe empezar con /
//2) handler: función (req, res, next) { }
//                     req: información que se recibe de la petición
//                     res: es la información que se le enviara al solicitante
//                     next: es un método para llamar a la siguiente promesa en la cola.
//                             MIDLEWARES.

router.get('/version', (req, res)=>{
    let versionObj = {
         app:"Simple Ecommerce SECOM API",
         version: "0.0.0.1",
         state: "alpha"
        }
    res.status(200).json(versionObj);
    }
);


module.exports = router;