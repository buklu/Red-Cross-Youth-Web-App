const {Sequelize} = require('sequelize');
const sequelize = new Sequelize("qd31a882yxiiqn6y", 'x937u7bj6vytxh44', 'f21atuaqyklbnp5g',{
    host: 'z5zm8hebixwywy9d.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    pool: {
        max: 30,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// const sequelize = new Sequelize('rcy_db', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//     pool: {
//         max: 10,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// });

try{
    sequelize.authenticate();
}catch(e){
    console.log(e)
}

exports.sequelize = sequelize;

/*    

Host    z5zm8hebixwywy9d.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
Username    x937u7bj6vytxh44    
Password    f21atuaqyklbnp5g    
Port    3306    
Database    qd31a882yxiiqn6y
*/