const express = require('express')
const app = express()

const seed = require('./seed')
seed()

const {db}= require('./db')
const{Movie}= require('./models/Index')
const{User}= require('./models/Index')

app.use(express.json())
app.get('/',async(req, res)=>{
    res.redirect('/movies')
})

app.get('/movies',async (req,res)=>{
    let allMovies = await Movie.findAll()
    res.json({allMovies})
})

app.get('/movies/:id', async (req,res)=>{
    let id = req.params.id;
    let movie = await Movie.findByPk(id);
    res.json({movie})
})
app.post('/movie', async (req, res) => {
	await Movie.create(req.body).then((movie)=>{
        res.status(201).json(movie)
    });
	res.send(`New Movie added`);
});

app.put('/movie/:id', async (req, res) => {
	let id = req.params.id; //10
	
    Movie.update(id,)
    
    //find the row
	// let movieToUpdate = await movie.findByPk(id); // {id: 10 'name': 'nameOfSong', 'genre': 'rock'}
	// await movieToUpdate.update(req.body);
	res.send(`song has been updated`);
});

app.delete('/movie/:id', async (req, res) => {
	//where helps us filter which column we are trying to identify
	await movie.destroy({
		where: { id: req.params.id },
	});
	res.send(`song deleted`);
});


app.listen(4000,()=>{
    console.log('app is listening on port 4000 🎥');
})