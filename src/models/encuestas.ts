import {DataTypes} from 'sequelize'
import db from '../database/connection'



const Encuestas = db.define('Encuestas', {

    nombre_encuesta: {
        type: DataTypes.STRING,

    },


})


export default Encuestas