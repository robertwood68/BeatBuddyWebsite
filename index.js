const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
res.send('')
})
app.listen(port, () => {
console.log(`BeatBuddy Web App is listening at http://localhost:${port}`)
})