import {DataTypes} from 'sequelize'
import db from '../database/connection'



const Encuestas = db.define('Encuestas', {
    encuesta_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_encuesta: {
        type: DataTypes.STRING,
        
    },


})


export default Encuestas