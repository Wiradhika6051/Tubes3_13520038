const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "halodna_db"
})
/* return search tanpa query:*/
router.get('/', function(req, res) {
  console.log("searching")
  //dapetin input
  console.log("search biasa")
  //establish database connection
  con.connect(function(err){
    if(err)console.log(err.stack)
    console.log("Database terhubung!!")
    let sql = null
    let valid = true
      //gaada query, kembaliin semua
      sql = "SELECT * FROM hasil_tes";
    //panggil query
    if(valid){
      con.query(sql,function(err,result){
        if(err)console.log(err.stack)
        res.send(result)
        console.log("Query berhasil!")
        console.log("query: "+sql)
      })
    }
  }
);
});
/* menerima query searching*/
router.get('/:query', function(req, res) {
  //dapetin input
  let query = req.params.query;
  //establish database connection
  con.connect(function(err){
    if(err)console.log(err.stack)
    console.log("Database terhubung!!")
    let sql = null
    let valid = true
    //sanitasi input
      //parse query
      let query_date = null
      let query_name = null
      //ganti %20 dengan whitespace
      query = query.replace(/%20/gi," ")
      const pattern = /^\s*((\d{0,2}\-\d{0,2}\-\d{0,4}\s*)?)([a-zA-Z].*|$)/
      //cek apakah format querynya valid. Format tanggal valid: DD-MM-YYYY
      if(!pattern.test(query)){
        //format gak valid, return null
        valid = false
        console.log("pattern tidak sesuai!")
        res.send(null)
        
      }
      else{
        //format valid, parse query
        const date_pattern = /^\s*(\d{0,2}\-\d{0,2}\-\d{0,4}\s*)/
        //template query
        sql = "SELECT * FROM hasil_tes WHERE "
        //dapatkan tanggal
        let date = date_pattern.exec(query)
        if(date){
          //date nya ditemukan
          query_date = date[0]
        }
        //dapatkan nama penyakit
        const disease_name_pattern = /[a-zA-Z].*/
        let disease_name = disease_name_pattern.exec(query)
        if(disease_name){
          //nama penyakitnya ditemukan
          query_name = disease_name[0]
        }
        //buat querynya
        if(date){
          //date ada
          sql = sql+ "tanggal_tes=STR_TO_DATE('"+ query_date+"','%d-%m-%Y')"
        }
        if(disease_name){
          //nama penyakit ada
          if(date){
            //date ada juga
            sql = sql+ " AND penyakit=\'"+ query_name+"\'"
          }
          else{
            sql = sql+ "penyakit=\'"+ query_name+"\'"
          }
        }
      }
    //panggil query
    if(valid){
      con.query(sql,function(err,result){
        if(err)console.log(err.stack)
        res.send(result)
        console.log("Query berhasil!")
        console.log("query: "+sql)
      })
    }
  }
);
});



module.exports = router;

//format regex:
/*
HARI-BULAN-TAHUN PENYAKIT
13 04 2022 mabok
valid:
\d{0,2}\s*\d{0,2}\s*\d{0,4}\s*(\^[a-zA-Z])*

dapetin tanggal:
\d{1,2}\s+\d{1,2}\s+\d{1,4}
dapetin nama:
\w+
*/