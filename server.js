const express = require('express')
const mongoose = require('mongoose')
const mongoDBUrl = "mongodb+srv://mor:database0temp@cluster0.leapuas.mongodb.net/?appName=Cluster0"
const port = 3000

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("API berhasil")
})

mongoose.connect(mongoDBUrl)
    .then(() => console.log("Berhasil terhubung ke MongoDB"))
    .catch(err => console.log(`Gagal terhubung ke MongoDB : ${err}`))

const routes = require('./router.js')
app.use('/api', routes)

app.listen(port, () => console.log(`Server running on port ${port}`))