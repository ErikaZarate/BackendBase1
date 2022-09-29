const { request, response } = require("express")

const rootMessage=(req=request,res=response) =>{
    const {texto1,texto2}=req.query
    //if(!texto1 || !texto2){
    //res.status(404).json({
     //msg:"no se han encontrado los parametros necesarios,este EndPoint ocupa los parametos 
     //"texto1" "texto2""
//)
if(!texto1){
    res.status(404).json({msg:"falta el parametro 'texto1'"}) 
    }
    if(!texto2){
        res.status(404).json({msg:"falta el parametro'texto2'"}) 
        }
        res.status(200).json({msg:texto1+''+texto2})

    }

const hiMessage = (req=request,res= response) =>{
    const {name}= req.params
    res.json({msg:'Hola '+ name})    
}

const byeMessage = (req=request,res=response) =>{
    res.status(406).json({msg:'Adiós mundo'}) 
}
const postMessage = (req=request,res= response) =>{
    res.status(407).json({msg:'Mensaje POST'}) 
}
const putMessage = (req=request,res=response) =>{
    res.status(408).json({msg:'Mensaje POST'})
}
const deleteMessage = (req=request,res=response) =>{
    res.status(409).json({msg:'Mensaje DELETE '}) 
}
module.exports = {
    rootMessage,
    hiMessage,
    byeMessage,
    postMessage,
    putMessage,
    deleteMessage}