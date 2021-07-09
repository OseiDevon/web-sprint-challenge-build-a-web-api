// Write your "actions" router here!

const express = require('express')
const Action = require('./actions-model')

const router = express.Router()


router.get ('/', (req, res, next) => {
    Action.get()
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(next)
})

router.get ('/:id', (req, res) => {//eslint-disable-line
    console.log("GET by ID endpoint connected")
})
router.post ('/', (req, res) => {//eslint-disable-line
    console.log("POST endpoint connected")
})
router.put ('/:id', (req, res) => {//eslint-disable-line
    console.log("PUT endpoint connected")
})
router.delete ('/:id', (req, res) => {//eslint-disable-line
    console.log("DELETE endpoint connected")
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        customMessage: err.message,
    })
})

module.exports = router
