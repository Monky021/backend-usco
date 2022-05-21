"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const encuestas_1 = __importDefault(require("./encuestas"));
const Preguntas = connection_1.default.define('Preguntas', {
    pregunta: {
        type: sequelize_1.DataTypes.STRING,
    },
    encuesta_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: encuestas_1.default,
            key: 'id'
        }
    }
});
encuestas_1.default.hasMany(Preguntas);
Preguntas.belongsTo(encuestas_1.default, { foreignKey: 'encuesta_id' });
exports.default = Preguntas;
