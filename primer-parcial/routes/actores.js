import express from "express";
import Actores from "../models/actores_model.js";
import {actualizarActor,crearActor,listaActores, actorId, actorNombre, eliminarAcotor, ordenAscendentePorId, ordenDescendentePorId,filtroAño, filtroGenero} from "../controllers/funciones_actores.js"
// import bcrypt from "bcrypt";
// import Joi from 'joi';

const ruta = express.Router();

// const schema = Joi.object({
//     nombre: Joi.string()
//         .alphanum()
//         .min(3)
//         .max(40)
//         .required()
// })

ruta.get("/", (req, res) => {
    let resultado = listaActores();
    resultado.then(actores => {
        res.json({
            actores
        })
    }).catch(err => {
        res.status(400).json({err})
    })
})
ruta.get('/:id', (req, res) => {
    const id = req.params.id;
    actorId(id)
        .then(actor => {
            if (actor) {
                res.json({ actor });
            } else {
                res.status(400).json({ error: "Actor no encontrado" });
            }
        })
        .catch(err => {
            res.status(400).json({ err });
        });
})
ruta.get('/nombre/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    actorNombre(nombre)
        .then(actor => {
            if (actor) {
                res.json({ actor });
            } else {
                res.status(400).json({ error: "Actor no encontrado" });
            }
        })
        .catch(err => {
            res.status(400).json({ err });
        });
})
ruta.get('/orden/ascendente', (req, res) => {
    ordenAscendentePorId()
        .then(actores => {
            res.json({ actores: actores });
        })
        .catch(err => {
            res.status(500).json({ err });
        });
});
ruta.get('/orden/descendente', (req, res) => {
    ordenDescendentePorId()
        .then(actores => {
            res.json({ actores:actores });
        })
        .catch(err => {
            res.status(500).json({ err });
        });
})
ruta.get('/nacimiento/:añoNacimiento', (req, res) => {
    const año = req.params.añoNacimiento;
    filtroAño(año)
        .then(datos => {
            if (datos) {
                res.json({ datos });
            } else {
                res.status(400).json({ error: "Actor no encontrado" });
            }
        })
        .catch(err => {
            res.status(400).json({ err });
        });
})
ruta.get('/genero/:genero', (req, res) => {
    const genero = req.params.genero;
    filtroGenero(genero)
        .then(datos => {
            if (datos) {
                res.json({ datos });
            } else {
                res.status(400).json({ error: "Actor no encontrado" });
            }
        })
        .catch(err => {
            res.status(400).json({ err });
        });
})
ruta.post('/',(req,res)=>{
    let body = req.body;
    let resultado = crearActor(body);
    resultado.then(pers =>{
        res.json({
            valor: pers
        })
    }).catch(err =>{
        res.status(400).json({err})
    })
})
ruta.put("/:id", (req, res)=>{
    let resultado = actualizarActor(req.body, req.params.id);
    resultado.then(valor  =>{
        res.json({
            valor
        }).catch(err => {
            res.status(400).json({err})
        })
    })
})
ruta.delete('/eliminar/:id', (req, res)=> {
    const id = req.params.id;
    eliminarAcotor(id)
        .then(resultado => {
            if (resultado.deletedCount > 0) {
                res.json({ message: "Actor eliminado con éxito" });
            } else {
                res.status(404).json({ error: "Actor no encontrado" });
            }
        })
        .catch(err => {
            res.status(400).json({err})
        });
})

export default ruta;