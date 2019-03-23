const express = require('express')
const server = express()
const knex = require('knex')

const db = require('./data/dbHelpers') 

server.use(express.json())

server.get('/api/dishes', async (req, res) => {
    try {
        const dishes = await db.getDishes()
        res.status(200).json(dishes)
    } catch(error) {
        res.status(500).json(error)
    }
})

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`\nrunning on port ${port}\n`))

