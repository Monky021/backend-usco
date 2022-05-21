import {DataTypes} from 'sequelize'
import db from '../database/connection'
import Estudiante from './estudiantes'
import Preguntas from './Preguntas'



const Respuestas = db.define('Respuestas', {

    respuesta: {
        type: DataTypes.INTEGER,

    },
    pregunta:{
        type: DataTypes.INTEGER,
        references: {
            model: Preguntas,
            key: 'id'
        }
    },
    estudiante_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Estudiante,
            key: 'id'
        }
    }


})

Respuestas.hasOne(Preguntas, {foreignKey: 'pregunta_id'})
Preguntas.belongsTo(Respuestas)

Respuestas.hasOne(Estudiante, {foreignKey: 'estudiante_id'})
Estudiante.belongsTo(Respuestas)




export default Respuestas