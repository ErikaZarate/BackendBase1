const rootMessage=(req, res) =>{
    res.send('Hola ')
}
const hiMessage = (req,res) =>{
    res.send('Hola Mundo')    
}
const byeMessage = (req,res) =>{
    res.send('Adiós mundo') 
}
module.exports ={rootMessage,hiMessage,byeMessage}