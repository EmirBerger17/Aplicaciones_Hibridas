import Actores from "../models/actores_model.js";

async function actualizarActor(body, id){
    let actor = await Actores.updateOne({id: id},{
        $set: {
            nombre: body.nombre,
            apellido: body.apellido,
            genero:body.genero,
            añoNacimiento:body.añoNacimientol
        }
    })
    return actor;
}
async function crearActor(body){
    let actor = new Actores({
        id:body.id,
        nombre:body.nombre,
        apellido:body.apellido,
        genero:body.genero,
        añoNacimiento:body.añoNacimiento
    })
    return await actor.save();
}
async function listaActores(){
    let actores = await Actores.find();
    return actores;
}
async function actorId(id){
    let actor = await Actores.find({id: id});
    return actor;
}
async function actorNombre(nombre){
    let actor = await Actores.find({nombre: nombre});
    return actor;
}
async function eliminarAcotor(id){
    let resultado = await Actores.deleteOne({id: id});
    return resultado;
}
async function ordenAscendentePorId() {
    const actores = await listaActores();
    return actores.sort((a, b) => a.id - b.id);
}
async function ordenDescendentePorId() {
    const actores = await listaActores();
    return actores.sort((a, b) => b.id - a.id);
}
async function filtroAño(añoNacimiento){
    let AñoBuscado = await Actores.find({añoNacimiento: añoNacimiento});
    return AñoBuscado;
}
async function filtroGenero(genero){
    let generoBuscado = await Actores.find({genero: genero});
    return generoBuscado;
}

export {actualizarActor,crearActor,listaActores, actorId, actorNombre, eliminarAcotor, ordenAscendentePorId, ordenDescendentePorId,filtroAño, filtroGenero};