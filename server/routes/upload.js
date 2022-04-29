const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const res = require('express/lib/response')

const router = express.Router();

router.use(cors())
router.use(fileUpload())
router.use(express.static('storage'))

router.post("/upload", (req, res) => {
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

export default router;