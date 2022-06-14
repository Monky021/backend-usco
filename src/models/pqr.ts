import {DataTypes} from 'sequelize'
import db from '../database/connection'
import Estudiante from './estudiantes'
import Sedes from './sedes'
import TipoSolicitud from './tipoSolicitudes'



const Pqr = db.define('Pqr', {
    pqr_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    asunto: {
        type: DataTypes.STRING,
        allowNull:false
    },
    detalle: {
        type: DataTypes.TEXT,
        allowNull: false
    }


})
TipoSolicitud.hasOne(Pqr)
Pqr.belongsTo(TipoSolicitud, {foreignKey: {
    name: 'tipo_solicitud_id',
    allowNull: false
}})

Sedes.hasOne(Pqr)
Pqr.belongsTo(Sedes, {foreignKey: {
    name: 'sede_id',
    allowNull: false
}})









export default Pqr