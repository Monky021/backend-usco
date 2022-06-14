import {Sequelize} from 'sequelize'

const db = new Sequelize('usco', 'carlos', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    logging: true,

})




export default db;


