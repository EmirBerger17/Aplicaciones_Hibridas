import Personaje from "../models/personajes_model.js";

async function actualizarPersonaje(body, id){
    let personaje = await Personaje.updateOne({id: id},{
        $set: {
            nombre: body.nombre,
            apellido: body.apellido,
            casa: body.casa,
            genero:body.genero,
            estudiante: body.estudiante,
            personal: body.personal
        }
    })
    return personaje;
}
async function crearPersonaje(body){
    let personaje = new Personaje({
        id:body.id,
        nombre:body.nombre,
        apellido:body.apellido,
        casa:body.casa,
        genero:body.genero,
        estudiante:body.estudiante,
        personal:body.personal
    })
    
    return await personaje.save();
}
async function listaPersonajes(){
    let personajes = await Personaje.find();
    return personajes;
}
async function personajeId(id){
    let personaje = await Personaje.find({id: id});
    return personaje;
}
async function personajeNombre(nombre){
    let personaje = await Personaje.find({nombre: nombre});
    return personaje;
}
async function eliminarPersonaje(id){
    let resultado= await Personaje.deleteOne({id: id});
    return resultado;
}
async function ordenAscendentePorId() {
    const personajes = await listaPersonajes();
    return personajes.sort((a, b) => a.id - b.id);
}
async function ordenDescendentePorId() {
    const personajes = await listaPersonajes();
    return personajes.sort((a, b) => b.id - a.id);
}
async function filtroCasa(casa){
    let casaBuscada = await Personaje.find({casa: casa});
    return casaBuscada;
}
async function filtroGenero(genero){
    let generoBuscada = await Personaje.find({genero: genero});
    return generoBuscada;
}

export {actualizarPersonaje, crearPersonaje, listaPersonajes, personajeId, personajeNombre, eliminarPersonaje,ordenAscendentePorId,ordenDescendentePorId,filtroCasa,filtroGenero};