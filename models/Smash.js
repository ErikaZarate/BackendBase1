const modeloSmash={
    queryGetSmash:"SELECT * FROM Smash",
    queryGetSmashByID:`SELECT * FROM Smash WHERE ID= ?`,
    querydeleteSmashByID:`UPDATE Smash SET Activo = '0' WHERE ID= ?`,
    querySmashExists:`SELECT Nombre FROM Smash WHERE Nombre= ?`,
    queryAddSmash:`
    INSERT INTO Smash (
        Nombre,
        Caracteristicas,
        AtaTierra,
        AtaAereos,
        Atributos, 
        Burlas, 
        Curiosidades,
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
 )
   `,
   queryGetSmashInf:`SELECT Nombre,Caracteristicas,AtaTierra,AtaAereos,Atributos, Burlas, Curiosidades,Activo FROM Smash WHERE Nombre= ?`,
   queryUpdateByNombre:`
   UPDATE Smash SET
        Caracteristicas=?,
        AtaTierra=?,
        AtaAereos=?,
        Atributos=?,
        Burlas=?, 
        Curiosidades=?, 
        Activo=?
        WHERE Nombre=?`
}

module.exports = modeloSmash
