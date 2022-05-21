

import {DataTypes} from 'sequelize'
import db from '../database/connection'



const TipoDocumento = db.define('TipoDocumento', {

    tipo_documento: {
        type: DataTypes.STRING,

    }


})


export default TipoDocumento