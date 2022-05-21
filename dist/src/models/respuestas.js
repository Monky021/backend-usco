"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const estudiantes_1 = __importDefault(require("./estudiantes"));
const Preguntas_1 = __importDefault(require("./Preguntas"));
const Respuestas = connection_1.default.define('Respuestas', {
    respuesta: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    pregunta: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Preguntas_1.default,
            key: 'id'
        }
    },
    estudiante_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: estudiantes_1.default,
            key: 'id'
        }
    }
});
Respuestas.hasOne(Preguntas_1.default, { foreignKey: 'pregunta_id' });
Preguntas_1.default.belongsTo(Respuestas);
Respuestas.hasOne(estudiantes_1.default, { foreignKey: 'estudiante_id' });
estudiantes_1.default.belongsTo(Respuestas);
exports.default = Respuestas;
