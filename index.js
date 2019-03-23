const express = require('express')
const server = express()

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

server.post('/api/dishes', async (req, res) => {
    try {
        const dishes = await db.addDish(req.body)
        res.status(201).json(dishes)
    } catch(error) {
        res.status(500).json(error)
    }
})

server.get('/api/dishes/:id', async (req, res) => {
    try {
        const id = req.params.id
        const dish = await db.getDish(id)
        if (dish) {
            res.status(200).json(dish)
        } else {
            res.status(404).json({ message: 'dish not found'})
        } 
    } catch(error) {
        res.status(500).json(error)
    }
})

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`\nrunning on port ${port}\n`))

