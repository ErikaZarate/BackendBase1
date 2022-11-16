const { request, response } = require("express")
const pool=require("../db/connection")
const modeloSmash=require("../models/Smash")

const getSmash=async(req = request,res = response) => {
   
    let conn;


    try{
        conn=await pool.getConnection()
        const users =await conn.query(modeloSmash.queryGetSmash,(error)=>{throw  new error})

        if(!users){
            res.status(404).json({msg:"no se encontraron registros"})
            return
        }
        res.json({users})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}



const getSmashByID=async(req = request,res = response) => {
   const{id}=req.params
    let conn;

    try{
        conn=await pool.getConnection()
        const [user]=await conn.query(modeloSmash.queryGetSmashByID, [id] ,(error)=>{throw  new Error (error)})

        if(!user){
            res.status(404).json({msg:`no se encontraon registros con el ID ${id}`})
            return
        }
        res.json({user})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const deleteSmashByID=async(req = request,res = response) => {
    const{id}=req.query
     let conn;
 
     try{
         conn=await pool.getConnection()
         const {affectedRows}=await conn.query(modeloSmash.querydeleteSmashByID,[id],(error)=>{throw  new Error (error)})
 
         if(!affectedRows){
             res.status(404).json({msg:`no se elimino el registros con el ID ${id}`})
             return
         }
         res.json({msg:`El usuario con ID ${id}se elimino satisfactoriamente `})
     }catch(error){
         console.log(error)
         res.status(500).json({error})
     }finally{
         if(conn){
             conn.end()
         }
     }
 }


 const addSmash=async(req = request,res = response) => {
    const{
        Nombre,
        Caracteristicas,
        AtaTierra,
        AtaAereos,
       Atributos,
        Burlas, 
        Curiosidades,
        Activo
    }=req.body
    if(
        !Nombre||
        !Caracteristicas||
        !AtaTierra||
        !AtaAereos||
        !Atributos||
        !Burlas||
        !Curiosidades||
        !Activo
    ){
        res.status(400).json({msg:"Falta información del usuario" })
    return
    }
 let conn;
     try{
         conn=await pool.getConnection()

         const [user]=await conn.query(modeloSmash.querySmashExists,[Nombre])
         if (user){
            res.status(403).json({msg:`El usuario ${Nombre} ya se encuentra registrado.`})
        return
         }
         const {affectedRows}=await conn.query(modeloSmash.queryAddSmash,[
        Nombre,
        Caracteristicas,
        AtaTierra,
        AtaAereos,
        Atributos,
        Burlas, 
        Curiosidades, 
        Activo
    ],(error)=>{throw  new error})
           
    if(!affectedRows===0){
res.status(404).json({msg:`no se pudo agregar el registro del usuario ${Nombre}`})
        return
    }
    res.json({msg:`El usuario con ID ${Nombre}se agrego satisfactoriamente `})
}catch(error){
    console.log(error)
    res.status(500).json({error})
}finally{
    if(conn){
        conn.end()
    }
}
}

 const updateUserSmash=async(req = request,res = response) => {
    const{
        Nombre,
        Caracteristicas,
        AtaTierra,
        AtaAereos,
        Atributos,
        Burlas, 
        Curiosidades, 
        Activo

    }=req.body
    if(
        !Nombre
        
    ){
        res.status(400).json({msg:"Falta información del usuario" })
    return
    }
 let conn;
     try{
         conn=await pool.getConnection()

         const [user]=await conn.query(modeloSmash.queryGetSmashInf,[Nombre])
         if (!user){
            res.status(403).json({msg:`El usuario ${Nombre} no se encuentra registrado`})
         }
         const {affectedRows}=await conn.query(modeloSmash.queryUpdateByNombre,[
        Caracteristicas|| user.Caracteristicas,
        AtaTierra|| user.AtaTierra,
        AtaAereos|| user.AtaAereos,
        Atributos|| user.Atributos,
        Burlas|| user.Burlas,
        Curiosidades|| user.Curiosidades,
        Activo|| user.Activo,
        Nombre
    ],(error)=>{throw  new error})
 
         if(affectedRows===0){
             res.status(404).json({msg:`no se pudo actualizar el registro del usuario${Nombre}`})
             return
         }
         res.json({msg:`El usuario con ${Nombre}se actualizo satisfactoriamente `})
     }catch(error){
         console.log(error)
         res.status(500).json({error})
     }finally{
         if(conn){
             conn.end()
         }
     }
 }







module.exports={getSmash,getSmashByID,deleteSmashByID,addSmash,updateUserSmash}

