const{db,DataTypes,Model}=require("../db")


class User extends Model{}


User.init({
    name: DataTypes.STRING
},{
    sequelize: db,
})


module.exports={User}