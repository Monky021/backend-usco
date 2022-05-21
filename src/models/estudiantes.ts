import {DataTypes} from 'sequelize'
import db from '../database/connection'
import TipoDocumento from './tipoDocumento'



const Estudiante = db.define('Estudiante', {

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
            key: 'id'
        }
    } 


})

TipoDocumento.hasMany(Estudiante)
TipoDocumento.belongsTo(Estudiante, {foreignKey: 'tipo_documento_id', constraints: false})
// Estudiante.hasOne(TipoDocumento)



export default Estudiante