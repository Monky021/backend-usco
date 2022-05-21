import {Sequelize} from 'sequelize'

const db = new Sequelize('usco', 'carlos', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    logging: true,

})
db.sync({force: false}).then(() => {
    console.log("Todos los modelos Sincronizados correctamente.");
  }).catch(err => {
    console.error('No fue posible sincronizar los modelos: ', err)
  })



export default db;


