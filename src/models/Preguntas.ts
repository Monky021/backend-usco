import {DataTypes} from 'sequelize'
import db from '../database/connection'
import Encuestas from './encuestas'



const Preguntas = db.define('Preguntas', {
    pregunta_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pregunta: {
        type: DataTypes.STRING,

    },
    
    encuesta_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Encuestas,
            key: 'encuesta_id' 
        }
    } 


})

Encuestas.hasMany(Preguntas, )
Preguntas.belongsTo(Encuestas, {foreignKey: 'encuesta_id'})

export default Preguntas