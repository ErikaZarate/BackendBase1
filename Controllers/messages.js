const rootMessage=(req, res) =>{
    res.send('Hola ')
}
const hiMessage = (req,res) =>{
    res.send('Hola Mundo')    
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