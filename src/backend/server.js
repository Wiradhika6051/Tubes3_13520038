const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const res = require('express/lib/response')

var addDiseaseRouter = require('./routes/penyakit');
var dnaTestRouter = require('./routes/ujidna');

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(fileUpload())
app.use(express.static('storage'))

app.get("/", (req, rest) => {
    res.send("Hello from express")
})

app.post("/addpenyakit", (req, res) => {
    const newPath = `${__dirname}/storage/addPenyakit` // Lokasi Penyimpanan File Upload
    const file = req.files.file // File Upload
    const fileName = file.name // Nama File Upload
    const namaPenyakit = req.body.namaPenyakit // Nama Penyakit yang telah diinput user
    
    file.mv(`${newPath}${fileName}`, (err) => {
        if (err) {
            return ( res.status(500).send({ message : "File upload failed", code: 200 }))
        }

        res.status(200).send({ message : "file uploaded", code: 200 })
    })
})

app.post("/ujiDNA", (req, res) => {
    const newPath = `${__dirname}/storage/ujiDNA/` // Lokasi Penyimpanan File Upload
    const file = req.files.file // File Upload
    const fileName = file.name // Nama File Upload
    const namaPengguna = req.body.namaPengguna // Nama Pengguna yang telah diinput user
    const prediksiPenyakit = req.body.prediksiPenyakit // Nama Penyakit yang telah diinput user
    
    file.mv(`${newPath}${fileName}`, (err) => {
        if (err) {
            return ( res.status(500).send({ message : "File upload failed", code: 200 }))
        }

        res.status(200).send({ message : "file uploaded", code: 200 })
    })
})

app.use('/addPenyakit', addDiseaseRouter);
app.use('/ujiDNA', dnaTestRouter);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));