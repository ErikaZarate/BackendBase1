const express =require('express')
const messagesRouter =require('./routes/messages') 
const messagesRouter =require('./routes/usuarios') 
const cors=require("cors")
class Server{
    constructor(){
        this.app = express()
        this.paths = {
            messages:"/api/v1/messages"
        }
        this.routes()
    }
    routes(){
        this.app.use(this.paths.messages,messagesRouter)
            
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