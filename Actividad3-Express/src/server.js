import express from 'express';
import listado from "./listado.json" assert {type: 'json'};

const expres = express();
expres.use(express.urlencoded({extended: true}));

expres.get('/',(req,res)=>{
    res.send('Emir Berger');
})
expres.get('/materia',(req,res)=>{
    res.send('Aplicaciones Hibridas');
})
expres.get('/profesor',(req,res)=>{
    res.send('Camila Belen Marcos Galban');
})

const tecnologias = ['JavaScript','Python','TypeScript','Java','PHP'];
expres.get('/stack/:tecnologia',(req,res)=>{
    for(let i=0;i<5;i++){
        if((req.params.tecnologia) == tecnologias[i]){
            res.send('Donde te dejo el CV?');
        }
    }
    res.send('A leer la documentacion entonces..');
})

expres.get('/productos',(req,res)=>{
    res.send(listado);
})
expres.get('/productos/:id',(req,res)=>{
    for(let i=0;i<10;i++){
        if((req.params.id) == listado[i].id){
            res.send(listado[i]);
        }
    }
    res.send('Producto no encontrado');
})
expres.get('/lista',(req,res)=>{
    let minimo = parseInt(req.query.minimo);
    let maximo = parseInt(req.query.maximo);
    let list = [];
    for(let i=0;i<10;i++){
        if(listado[i].precio >= minimo && listado[i].precio <= maximo){
            list.push(listado[i])
        }
    }
    res.send(list); 
})

expres.use((req,res)=>{
    res.status(404).send('<h1>Página no encontrada</h1>');
})
expres.listen(2023,()=> console.log('Server running...\nopen in http://localhost:2023'));