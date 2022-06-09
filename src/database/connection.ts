import {Sequelize} from 'sequelize'

const db = new Sequelize('usco', 'carlos', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,

})




export default db;


