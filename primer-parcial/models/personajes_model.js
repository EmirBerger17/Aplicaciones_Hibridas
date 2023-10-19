import mongoose from "mongoose";

const personajesSchema = new mongoose.Schema({
    id:{
        type: Number,
        require: true
    },
    nombre:{
        type: String,
        require: true
    },
    apellido:{
        type: String,
        require: true
    },
    casa:{
        type: String,
        require: true
    },
    genero:{
        type: String,
        require: true
    },
    estudiante:{
        type: Boolean,
        require: true,
        default: true
    },
    personal:{
        type: Boolean,
        require: true,
        default: true
    },
    imagen:{
        type: String,
        require: false
    }
})

export default mongoose.model("Personajes", personajesSchema);