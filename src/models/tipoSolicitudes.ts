import {DataTypes} from 'sequelize'
import db from '../database/connection'



const TipoSolicitud = db.define('TipoSolicitud', {
    tipo_solicitud_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipo_solicitud: {
        type: DataTypes.STRING,

    }


})


export default TipoSolicitud