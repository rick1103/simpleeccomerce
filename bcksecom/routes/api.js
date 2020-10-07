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
const productosRoutes = require('./api/productos');
const productosRoutes2 = require('./api/productosdb');

router.get('/version', (req, res)=>{
    let versionObj = {
        app:"Simple Ecommerce SECOM API",
        version: "0.0.0.1",
        state: "alpha"
        }
    res.status(200).json(versionObj);
    }
);

router.use('/productos',productosRoutes);
router.use('/productosdb',productosRoutes2);

/*
router.get('/param/:edad',(req,res)=>{
    var edad = parseInt(req.params.edad);
    res.status(200).json({"Edad":edad});
});

router.post('/new',(req,res)=>{
        // $_POST datos del formulario http
        //let msg = req.body.msg;
        //es6 destructuring
        let { msg } = req.body;
        res.status(200).json ({"Mensaje":msg});
}); // new

router.put('/update/:id',(req,res)=>{
    let { id } = req.params;
    id = parseInt(id);
    let { edad } = req.body;

    res.status(200).json ({id, edad});
});

router.delete('/delete/:id',(req,res)=>{
    let { id } = req.params;
    id = Number(id);
    res.status(200).json({id});
});
*/
module.exports = router;