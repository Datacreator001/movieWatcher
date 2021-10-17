const {db,DataTypes,Model}= require('../db')

class Index extends Model{}


const{Movie}= require('./Movie')
const{User}=require('./User')


Movie.belongsTo(User)
User.hasMany(Movie)


module.exports={Movie,User}
