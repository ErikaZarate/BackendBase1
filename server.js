const express =require('express')

class Server{
    constructor(){
        this.app = express()
        thi.routes()
    }
    routes(){
        this.app.get('/', (req, res)=> {
            res.send("hello Word")
    })  
}
listen(){
    this.app.listen(process.env.PORT,() =>{
        console.log("Backend en ejecución en el puerto",process.env.PORT)
    })
}
}
modele.exports = server