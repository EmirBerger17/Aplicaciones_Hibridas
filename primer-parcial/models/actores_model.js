import mongoose from "mongoose";

const actoresSchema = new mongoose.Schema({
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
    genero:{
        type: String,
        require: true
    },
    añoNacimiento:{
        type: Number,
        require: true
    },
    imagen:{
        type: String,
        require: false
    }
})

export default mongoose.model("Actores",actoresSchema);