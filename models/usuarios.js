const modelousuarios={
    queryGetUsers:"SELECT * FROM Usuarios",
    queryGetUserByID:`SELECT * FROM Usuarios WHERE ID= ?`,
    querydeleteUserByID:`UPDATE Usuarios SET Activo = '0' WHERE ID= ?`,
    queryUserExists:`SELECT Usuario FROM Usuarios WHERE Usuario= ?`,
    queryAddUser:`
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
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
            )`,
    queryGetUserInfor: `
            SELECT Usuario, Nombre, Apellidos, Edad, Genero, Fecha_Nacimiento 
            FROM Usuarios 
            WHERE Usuario = ?
            `,
    queryUpdateByUsuario: `
            UPDATE usuarios SET
                Nombre = ?,
                Apellidos = ?,
                Edad = ?,
                Genero = ?,
                Fecha_Nacimiento = ?
            WHERE Usuario = ?
            `,
            querySignIn: `SELECT Usuario, Contrasena, Activo FROM usuarios WHERE Usuario = ?`,
            queryUpdateContra: `
            UPDATE usuarios SET
                Contrasena = ?
            WHERE Usuario = ?
            ` 
        }

            const UpdateUserByUsuario = (
                Nombre,
                Apellidos,
                Edad,
                Genero,
                Fecha_Nacimiento,
                Usuario
            ) => {
                return `
                    UPDATE Usuarios SET
                        Nombre = '${Nombre}',
                        Apellidos = '${Apellidos}',
                        Edad = ${Edad},
                        ${Genero  ? `Genero = '${Genero}',`: ''}
                        Fecha_Nacimiento = '${Fecha_Nacimiento}'
                    WHERE Usuario = '${Usuario}'
                `
            }

module.exports={modelousuarios,UpdateUserByUsuario}