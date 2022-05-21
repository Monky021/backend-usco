"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const tipoDocumento_1 = __importDefault(require("./tipoDocumento"));
const Estudiante = connection_1.default.define('Estudiante', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING
    },
    codigo: {
        type: sequelize_1.DataTypes.STRING
    },
    correo: {
        type: sequelize_1.DataTypes.STRING
    },
    numero_documento: {
        type: sequelize_1.DataTypes.STRING
    },
    documento_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: tipoDocumento_1.default,
            key: 'id'
        }
    }
});
tipoDocumento_1.default.hasMany(Estudiante);
tipoDocumento_1.default.belongsTo(Estudiante, { foreignKey: 'tipo_documento_id', constraints: false });
// Estudiante.hasOne(TipoDocumento)
exports.default = Estudiante;
