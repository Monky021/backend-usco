import {DataTypes} from 'sequelize'
import db from '../database/connection'



const Sedes = db.define('Sedes', {
    sede_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sede: {
        type: DataTypes.STRING,

    }


})



export default Sedes