"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('usco', 'carlos', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    logging: true,
});
db.sync({ force: false }).then(() => {
    console.log("Todos los modelos Sincronizados correctamente.");
}).catch(err => {
    console.error('No fue posible sincronizar los modelos: ', err);
});
exports.default = db;
