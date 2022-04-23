var express = require('express');
var router = express.Router();




/* menambahkan penyakit ke database */
router.post('/penyakit', function(req, res) {
  //dapetin nama sama rantai_dna (filenya)
  const nama = req.body.nama;
  const rantai_dna_files = req.files;
  if(!rantai_dna_files || Object.keys(req.files).length==0){
    return res.status(400).send("Tidak ada file yang dikirimkan!")
  }
  //retrieve dari nama input field buat retrieve (misal: <input name="x")
  //let x = req.files.x  
  //sanitasi input

  //asumsi yang disimpan itu stringnya

});

module.exports = router;

var express = require('express');