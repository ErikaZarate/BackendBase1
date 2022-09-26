const { request } = require("express")

const rootMessage=(req, res) =>{
    res.send('Hola ')
}
const hiMessage = (req=request,res= response) =>{
    res.json({msg:'Hola Mundo'})    
}
const byeMessage = (req,res) =>{
    res.send('Adiós mundo') 
}
const postMessage = (req,res) =>{
    res.send('Mensaje POST') 
}
const putMessage = (req,res) =>{
    res.send('Mensaje POST')
}
const deleteMessage = (req,res) =>{
    res.send('Mensaje DELETE ') 
}
module.exports = router