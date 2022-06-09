import {DataTypes} from 'sequelize'
import TipoDocumento from './tipoDocumento'
import db from '../database/connection'



const Estudiante = db.define('Estudiante', {
    estudiante_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nombre: {
        type: DataTypes.STRING,

    },
    apellido: {
        type: DataTypes.STRING
    },
    codigo: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    numero_documento: {
        type: DataTypes.STRING
    },
    documento_id:{
        type: DataTypes.INTEGER,
        references: {
            model: TipoDocumento,
            key: 'tipo_documento_id'
        }
    } 


})

TipoDocumento.hasMany(Estudiante, {foreignKey: 'tipo_documento_id'})
TipoDocumento.belongsTo(Estudiante, {foreignKey: 'tipo_documento_id', constraints: false})
// Estudiante.hasOne(TipoDocumento)



export default Estudiante