const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const res = require('express/lib/response')

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(fileUpload())
app.use(express.static('storage'))

app.get("/", (req, rest) => {
    res.send("Hello from express")
})

app.post("/upload", (req, res) => {
    const newPath = `${__dirname}/storage/`
    const file = req.files.file
    const fileName = file.name

    file.mv(`${newPath}${fileName}`, (err) => {
        if (err) {
            return ( res.status(500).send({ message : "File upload failed", code: 200 }))
        }

        res.status(200).send({ message : "file uploaded", code: 200 })
    })
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`));