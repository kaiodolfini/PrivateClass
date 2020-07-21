const express = require('express')
const { restart } = require('nodemon')
const routes = express.Router()
const teachers = require('./teachers')

routes.get('/', function(req, res) {
    return res.redirect("/teachers")
})

routes.get('/teachers', function(req, res) {
    return res.render("teachers/index")
})

routes.get('/teachers/create', function(req, res) {
    return res.render("teachers/create")
})

routes.post('/teachers', teachers.post)

routes.get('/Students', function(req, res) {
    return res.send("students")
})

module.exports = routes