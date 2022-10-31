const { request, response } = require("express")
const bcryptjs=require("bcryptjs")
const pool=require("../db/connection")
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
        const [user]=await conn.query(`SELECT * FROM Usuarios WHERE ID= ${id}`,(error)=>{throw  new Error (error)})

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
         const {affectedRows}=await conn.query(`UPDATE Usuarios SET Activo = 'N' WHERE ID= ${id}`,(error)=>{throw  new Error (error)})
 
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

         const [user]=await conn.query(`SELECT Usuario FROM Usuarios WHERE Usuario= '${Usuario}'`)
         if (user){
            res.status(403).json({msg:`El usuario ${Usuario} ya se encuentra registrado.`})
        return
         }
        const salt=bcryptjs.genSaltSync()
        const ContrasenaCifrada=bcryptjs.hashSync(Contrasena,salt)
         const {affectedRows}=await conn.query(`
INSERT INTO Usuarios (
        Usuario,
        Nombre,
        Apellidos,
        Edad,
        Genero,
        Contrasena, 
        Fecha_Nacimiento, 
        Activo
        )VALUES(
            '${Usuario}', 
        '${Nombre}',
        '${Apellidos}',
        ${Edad},
        '${Genero||''}',
        '${ContrasenaCifrada}',
        '${Fecha_Nacimiento}',
        '${Activo}'
        )
        `,(error)=>{throw new error})
 
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
        Nombre,
        Apellidos,
        Edad,
        Genero,
        Usuario,
        Contrasena, 
        Fecha_Nacimiento="1900-01.01"

    }=req.body
    if(
        !Nombre||
        !Apellidos||
        !Edad||
        !Contrasena
        
    ){
        res.status(400).json({msg:"Falta información del usuario" })
    return
    }
 let conn;
     try{
         conn=await pool.getConnection()

         const [user]=await conn.query(`SELECT Usuario, Nombre, Apellidos, Edad, Genero,Fecha_Nacimiento
         FROM usuarios WHERE Usuario= '${Usuario}'`)
         if (!user){
            res.status(403).json({msg:`El usuario ${Usuario} se actualizo satisfactoriamente`})
         }
         const {affectedRows}=await conn.query(`
UPDATE Usuarios SET
        Nombre='${Nombre || user.Nombre  }',
        Apellidos='${Apellidos || user.Apellidos} ',
        Edad='${Edad || user.Edad}',
        Genero, '${Genero|| user.Genero}'
        Fecha_Nacimiento=  '${Fecha_Nacimiento}',
      
        WHERE Usuario='${Usuario}'
        `,(error)=>{throw new error})
 
         if(affectedRows===0){
             res.status(404).json({msg:`no se pudo actualizar el registro del usuario${Usuario}`})
             return
         }
         res.json({msg:`El usuario con ${Usuario}se agrago satisfactoriamente `})
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

         const [user]=await conn.query(`SELECT Usuario, Contrasena, Activo FROM Usuarios WHERE Usuario= '${Usuario}'`)
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

module.exports={getUsers,getUserByID,deleteUserByID,addUser,updateUserByUsuario,signIn}

