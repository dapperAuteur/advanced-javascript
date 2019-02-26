const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
// No! You're (probably) doing it wrong if you do this.
// app.use(cors())

app.get('/myaccount', (req, res) => {
  res.json({
    accountNumber: 123
  })
})

const SERVER_PORT = process.env.SERVER_PORT || 4000
app.listen(SERVER_PORT, () => {
  console.log('Server is now listening on port ' + SERVER_PORT)
})
