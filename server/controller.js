
//get access to the data-base 
let movies = require('./db.json')
//4
let globalID = 11

//2
//get movies from data-base
module.exports = {
    getMovies: (req, res) =>{
        res.status(200).send(movies)
    //3
    },
    deleteMovie:(req, res) =>{
        let index = movies.findIndex(element => element.id === +req.params.id)
            movies.splice(index, 1)
            res.status(200).send(movies)
        //console.log(req.params.id)
    //4
    },
    createMovie: (req, res) => {
        const {title, rating, imageURL} = req.body 
        //console.log(req.body)
        let newMovie = {
            title, 
            rating: +rating,
            imageURL,
            id: globalID
        }
        movies.push(newMovie)
        globalID++
        res.status(200).send(movies)
    //5
    },
        updateMovie: (req, res) =>{
            //console.log(req.params.id)
            //console.log(req.body)
            const {type} = req.body
            let index = movies.findIndex(element => element.id === +req.params.id)
            if(type === 'minus'){
                movies[index].rating -= 1
                res.status(200).send(movies)
            }else if (type === 'plus'){
                movies[index].rating += 1
                res.status(200).send(movies)
            }
        }
}





