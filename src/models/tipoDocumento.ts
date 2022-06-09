

import {DataTypes} from 'sequelize'
import db from '../database/connection'



const TipoDocumento = db.define('TipoDocumento', {
    tipo_documento_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipo_documento: {
        type: DataTypes.STRING,

    }


})


export default TipoDocumento