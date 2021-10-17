const {db,DataTypes,Model}= require('../db')


class Movie extends Model {}

Movie.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    seasons: DataTypes.INTEGER,
    ratings: DataTypes.INTEGER,
},
{
    sequelize: db,
})



module.exports= {Movie}