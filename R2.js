let mysql = require("mysql2")

let connection = mysql.createConnection(
    {
        host        : "localhost",
        user        : "root",
        password    : "Contraseña",
        database    : "CODENOTCH"
    }
);

connection.connect(function(error){
    if(error)
    console.log(error);
    else console.log("Conexión correcta");
});



// let sql = "SELECT AVG (Nota) FROM Notas WHERE id_Asig = 1"
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else {
//         console.log("Media realizada")
//         console.log(result);
//     }
// })

let sql = "SELECT * FROM Alumnos WHERE YEAR(Ingreso)=2021"
connection.query(sql, function(err, result){
    if (err)
    console.log(err);
    else {
        console.log("Alumnos 2021")
        console.log(result);
    }
})


// let sql = "SELECT COUNT(*) FROM Alumnos"
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else {
//         console.log("Cantidad de Alumnos calculada")
//         console.log(result);
//     }
// })



// let sql = "SELECT * FROM Grupos";
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else {
//         console.log("Lista de Grupos realizada")
//         console.log(result);
//     }
// })




// let sql = "DELETE FROM Notas WHERE Nota > 5 AND YEAR(Fecha)=2020"
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else {
//         console.log("Notas eliminadas")
//         console.log(result);
//     }
// });



// let sql = "SELECT id_asignatura, COUNT(*) AS num_Profesores2 FROM Asignatura_Profesor GROUP BY id_asignatura"
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else {
//         console.log("Profesores Calculados")
//         console.log(result);
//     }
// });



// let sql = "SELECT id_N, Nota FROM Notas WHERE id_N BETWEEN '1' AND '20'  OR Nota > 8 AND YEAR(Fecha) = 2020";
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else {
//         console.log("Profesores Calculados")
//         console.log(result);
//     }
// });


// let sql = "SELECT id_Asig, AVG(Nota) FROM Notas WHERE YEAR(Fecha) = 2021 GROUP BY id_Asig;"
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else {
//         console.log("Media realizada")
//         console.log(result);
//     }
// })


// let sql = "SELECT id_Alum, AVG(Nota) FROM Notas WHERE YEAR(Fecha) = 2021 GROUP BY id_Alum;"
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else {
//         console.log("Media realizada")
//         console.log(result);
//     }
// })