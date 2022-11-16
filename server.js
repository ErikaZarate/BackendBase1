const express =require('express')
const messagesRouter =require('./routes/messages') 
const usuariosRouter =require('./routes/usuarios') 
const SmashRouter =require('./routes/Smash') 
const cors=require("cors")
class Server{
    constructor(){
        this.app = express()
        this.paths = {
            messages:"/api/v1/messages",
            usuarios:"/api/v1/usuarios",
            Smash:"/api/v1/Smash"
        }
        this.middlewares()
        this.routes()
    }
    routes(){
        this.app.use(this.paths.messages,messagesRouter)
        this.app.use(this.paths.usuarios,usuariosRouter)  
        this.app.use(this.paths.Smash,SmashRouter)           
    }  

middlewares(){
    this.app.use(cors())
    this.app.use(express.json())
}
listen(){
    this.app.listen(process.env.PORT, () =>{
        console.log("Backend en ejecución en el puerto",process.env.PORT)
    })
}
}
module.exports = Server