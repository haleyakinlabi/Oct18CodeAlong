//npm i (installs express and cors)
//basic setup for a server
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

//2
//get movies from data-base 
//connect to controller
const controller = require('./controller')
const {getMovies, deleteMovie, createMovie, updateMovie} = controller

app.get('/api/movies', getMovies)

//3
//delete a few movies from data-base 
app.delete('/api/movies/:id',deleteMovie )

//4
//add new movie
app.post('/api/movies', createMovie)

//5 
//change rating of movies
app.put('/api/movies/:id', updateMovie)



app.listen(4004, () => {console.log('listening on port 4004')})





