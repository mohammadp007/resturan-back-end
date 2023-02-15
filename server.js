const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const errorhandler = require('errorhandler')
const cors = require('cors');

let store = {
  users: []
}

let app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(errorhandler())

app.use((req, res, next) => {
    req.store = store
    next()
})

app.get('/users', routes.users.getUsers);
app.post('/users', routes.users.addUser);
app.post('/users/:userId/validate', routes.users.validate);

app.get('/foods/:userId', routes.foods.getFoods);
app.get('/foods/:userId/:id', routes.foods.getFood);
app.get('/foods/:userId/:id/comments', routes.foods.getComments);



app.listen(3000)