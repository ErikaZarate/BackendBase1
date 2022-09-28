const { request, response } = require("express")

const rootMessage=(req=request,res=response) =>{
    const {texto1,texto2}=req.query
    //if(!texto1 || !texto2){
    //res.status(404).json({
     //msg:"no se han encontrado los parametros necesarios,este EndPoint ocupa los parametos 
     //"texto1" "texto2""
})
}
if(!texto1){
    res.status(404).json({msg:"falta el parametro"}) 
    }
const hiMessage = (req=request,res= response) =>{
    res.status(405).json({msg:'Hola Mundo'})    
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