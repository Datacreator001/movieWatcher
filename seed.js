const path = require('path')
const fs = require('fs').promises




const{db}= require('./db')
const {Movie}=require('./models/Index')
const {User}= require('./models/Index')




const seed = async()=>{
    await db.sync({force:true})

    const seedPath = path.join(__dirname,'movie.json')
    const seedPath2= path.join(__dirname,'user.json')
    const buffer = await fs.readFile(seedPath)
    const buffer2 = await fs.readFile(seedPath2)
    const{data}= JSON.parse(String(buffer))
    const{data2}= JSON.parse(String(buffer2))

    const moviePromises = data.map(movie=>Movie.create(movie))
    const userPromises = data2.map(user=>User.create(user))
    await Promise.all(moviePromises)
    await Promise.all(userPromises)

    console.log("DataBase populated");
}

module.exports = seed