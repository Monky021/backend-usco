"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Encuestas = connection_1.default.define('Encuestas', {
    nombre_encuesta: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.default = Encuestas;