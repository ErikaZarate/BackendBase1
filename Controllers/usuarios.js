const { request, response } = require("express")
const bcryptjs=require("bcryptjs")
const pool=require("../db/connection")
const {modelousuarios,UpdateUserByUsuario}=require("../models/Usuarios");


const getUsers=async(req = request,res = response) => {
    let conn;
    try{
        conn=await pool.getConnection()
        const users=await conn.query("SELECT * FROM Usuarios",(error)=>{throw  new error})

        if(!users){
            res.status(404).json({msg:"no se encontraon registros"})
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



const getUserByID=async(req = request,res = response) => {
   const{id}=req.params
    let conn;
    try{
        conn=await pool.getConnection()
        const [user] = await conn.query(modelousuarios.queryGetUserByID, [id], (error)=>{throw new error})

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

const deleteUserByID=async(req = request,res = response) => {
    const{id}=req.query
     let conn;
 
     try{
         conn=await pool.getConnection()
         const {affectedRows} = await conn.query(modelousuarios.querydeleteUserByID, [id], (error)=>{throw new error})
         if(!affectedRows){
             res.status(404).json({msg:`no se encontraon registros con el ID ${id}`})
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


 const addUser=async(req = request,res = response) => {
    const{
        Nombre,
        Apellidos,
        Edad,
        Genero,
        Contrasena, 
        Usuario,
        Fecha_Nacimiento='1900-01-01',
        Activo
    }=req.body
    if(
        !Nombre||
        !Apellidos||
        !Edad||
        !Usuario||
        !Contrasena||
        !Activo
    ){
        res.status(400).json({msg:"Falta información del usuario" })
    return
    }
 let conn;
     try{
         conn=await pool.getConnection()

         const [user] = await conn.query(modelousuarios.queryUserExists, [Usuario])
         if (user){
            res.status(403).json({msg:`El usuario ${Usuario} ya se encuentra registrado.`})
        return
         }
        const salt=bcryptjs.genSaltSync()

        const ContrasenaCifrada=bcryptjs.hashSync(Contrasena,salt)
         const {affectedRows}=await conn.query(modelousuarios.queryAddUser, [
        Usuario,
        Nombre,
        Apellidos,
        Edad,
        Genero,
        Contrasena, 
        Fecha_Nacimiento, 
        Activo
    ], (error)=>{throw new error})
 
         if(affectedRows===0){
             res.status(404).json({msg:`no se pudo agregar el registro del usuario${Usuario}`})
             return
         }
         res.json({msg:`El usuario con ${Usuario}se agrego satisfactoriamente `})
     }catch(error){
         console.log(error)
         res.status(500).json({error})
     }finally{
         if(conn){
             conn.end()
         }
     }
 }

 const updateUserByUsuario=async(req = request,res = response) => {
    const{
        Usuario,
        Nombre,
        Apellidos,
        Edad,
        Genero,
        Fecha_Nacimiento="1900-01.01"
    }=req.body
    if(
        !Usuario||
        !Nombre||
        !Apellidos||
        !Edad||   
    ){
        res.status(400).json({msg:"Falta información del usuario" })
    return
    }
 let conn;
     try{
         conn=await pool.getConnection()

         const [user] = await conn.query(modelousuarios.queryGetUserInfor, [Usuario])
         if (!user){
            res.status(403).json({msg:`El usuario ${Usuario} no se encuentra registrado`})
         }
         const {affectedRows} = await conn.query(UpdateUserByUsuario (
            Nombre,
            Apellidos,
            Edad,
            Genero,
            Fecha_Nacimiento,
            Usuario
        ), (error)=>{throw new error})

         if(affectedRows===0){
             res.status(404).json({msg:`no se pudo actualizar el registro del usuario${Usuario}`})
             return
         }
         res.json({msg:`El usuario con ${Usuario}se agregó satisfactoriamente `})
     }catch(error){
         console.log(error)
         res.status(500).json({error})
     }finally{
         if(conn){
             conn.end()
         }
     }
 }



 const signIn=async(req = request,res = response) => {
    const{
    
        Usuario,
        Contrasena,
    }=req.body
    if(
        !Usuario||
        !Contrasena
      
    ){
        res.status(400).json({msg:"Falta información del usuario" })
    return
    }
 let conn;
     try{
         conn=await pool.getConnection()

         const [user] = await conn.query(modelousuarios.querySignIn, [Usuario])
         if (!user || user.Activo==='N'){
            let code =!user? 1 : 2;
        
            res.status(403).json({msg:`El usuario o la contraseña son incorrectos`, errorCode:code})
        return
         }
        const accesoValido=bcryptjs.hashSync.compareSync(Contrasena,user.Contrasena)
        if(!accesoValido){
        res.status(403).json({msg:`El usuario o la contraseña son incorrectos`,errorCode:3} )
        return
        }  

         res.json({msg:`El usuario con ${Usuario}ha iniciado sesion satisfactoriamente `})
     } catch(error){
         console.log(error)
         res.status(500).json({error})
     }finally{
         if(conn){
             conn.end()
         }
     }
 }


 const CambioContrasena=async(req = request,res = response) => {
    const{
    
        Usuario,
        Contrasena,
        NuevaContrasena
    }=req.body
    if(
        !Usuario||
        !Contrasena||
        !NuevaContrasena
    ){
        res.status(400).json({msg:"Falta información del usuario" })
    return
    }
 let conn;
     try{
         conn=await pool.getConnection()

         const [user] = await conn.query(modelousuarios.querySignIn, [Usuario])
     if(!user){
                res.status(403).json({msg:`El usuario '${Usuario}' no se encuentra registrado.`})
                return
            }
           if (!user || user.Activo==='N'){
            let code =!user? 1 : 2;
            res.status(403).json({msg:`El usuario o la contraseña son incorrectos`, errorCode:code})
        return
         }

        if(Contrasena===NuevaContrasena){
            res.status(403).json({msg:`No puede utilizar la contraseña anterior, ingrese una nueva.`})
            return
        }

        const salt = bcryptjs.genSaltSync()
        const contrasenaCifrada = bcryptjs.hashSync(NuevaContrasena, salt)

        const {affectedRows} = await conn.query(modelousuarios.queryUpdateContra, [
            contrasenaCifrada,
            Usuario
        ], (error)=>{throw new error})

        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo actualizar la contraseña`})
            return
        }
    res.json({msg:`La contraseña se actualizó satisfactoriamente.`})
}catch(error){
    console.log(error)
    res.status(500).json({error})
}finally{
    if(conn){
        conn.end()
    }
}
}

module.exports={getUsers,getUserByID,deleteUserByID,addUser,updateUserByUsuario,signIn,CambioContrasena}

