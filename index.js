const express = require('express')
const app = require("./app")
const port = 8000
app.get('/', (req, res) => {
res.send('')
})
app.listen(port, () => {
console.log(`BeatBuddy Web App is listening at http://localhost:${port}`)
})