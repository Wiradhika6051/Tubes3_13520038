var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "halodna_db"
})


//create database
con.connect(function(err){
    if(err)throw err;
    console.log("connected!")
    //query
    //var sql = "INSERT INTO customers(name,address) VALUES ('Company Inc', 'Highway 37')"
    //insert many
    /*
    var sql = "INSERT INTO customers(name,address) VALUES ?"
    var values = [
        ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
    ]
    con.query(sql,[values],function(err,result){
        if(err)throw err;
        console.log("number affected"+result.affectedRows);
    })
    *///
   //select
   //var sql = "CREATE TABLE penyakit(id_penyakit INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nama VARCHAR(255), rantai_dna VARCHAR(511))"
   var sql = "UPDATE penyakit SET id_penyakit=1"
   con.query(sql,function(err,result,fields){
    if(err)throw err;
    console.log("tertambahkan 12");
    //database created
})

})