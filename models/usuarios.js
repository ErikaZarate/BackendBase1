const modelousuarios={
    queryGetUsers:"SELECT * FROM Usuarios",
    queryGetUserByID:`SELECT * FROM Usuarios WHERE ID= ?`,
    querydeleteUserByID:`UPDATE Usuarios SET Activo = 'N' WHERE ID= ?`,
    queryUserExists:`SELECT Usuario FROM Usuarios WHERE Usuario= ?'`,
    queryAddUser
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
        )?
   



}

.exports.modelousuarios