const express = require("express")
const app = express()
const cors = require("cors")

require("dotenv").config();
const port = process.env.PORT || 7000;

app.use(express.static("public"))
app.use(express.json());
app.use(cors())

const triviaRoute = require("./route/trivia")

app.get('/', (req, res) => {
    res.send('Welcome Home')
})

app.use('/api/trivia', triviaRoute);

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})