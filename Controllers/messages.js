const { request, response } = require("express")
const rootMessage=(req=request,res=response) =>{
    res.status(404).json({msg:'Hola'})

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
    deleteMessage
}