import {DataTypes} from 'sequelize'
import Estudiante from './estudiantes'
import Preguntas from './Preguntas'
import db from '../database/connection'



const Respuestas = db.define('Respuestas', {
    respuesta_id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    respuesta: {
        allowNull: false,
        type: DataTypes.INTEGER,

    },
    // pregunta_id:{
    //     allowNull: false,
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: Preguntas,
    //         key: 'id'
    //     }
    // },
    // estudiante_id: {
    //     allowNull: false,
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: Estudiante,
    //         key: 'id'
    //     }
    // }


})

// Respuestas.hasOne(Preguntas, {foreignKey: 'pregunta_id'})
// Preguntas.belongsTo(Respuestas)
Respuestas.belongsTo(Preguntas, {
    foreignKey: {
        allowNull: false,
        name: 'pregunta_id'
    }
})
Preguntas.hasMany(Respuestas, {foreignKey : 'pregunta_id'})

Respuestas.belongsTo(Estudiante, {
    foreignKey: {
        allowNull: false,
        name: 'estudiante_id'
    }
})
Estudiante.hasOne(Respuestas, {foreignKey: 'estudiante_id'})




export default Respuestas