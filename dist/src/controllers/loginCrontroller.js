"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const generar_jwt_1 = require("../middlewares/generar-jwt");
const estudiantes_1 = __importDefault(require("../models/estudiantes"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, password } = req.body;
    try {
        //TODO: VALIDACION DE CORREO Y CEDULA
        const estudiante = yield estudiantes_1.default.findOne({
            where: {
                correo
            }
        });
        //TODO: VALIDAR SI EL USUARIO EXISTE
        if (!estudiante) {
            return res.status(404).json({
                mensaje: 'Correo y/o contraseña no coinciden'
            });
        }
        //TODO: VALIDAR SI LA CONTRASEÑA ES CORRECTA
        const passwordDb = estudiante.getDataValue('numero_documento');
        console.log(password, passwordDb);
        if (password !== passwordDb) {
            return res.status(400).json({
                mensaje: 'Correo y/o contraseña no coinciden'
            });
        }
        const uid = estudiante.getDataValue('id');
        //TODO: GENERAR TOKEN JWT
        const token = yield (0, generar_jwt_1.generarJWT)(uid);
        return res.status(200).json({
            exitoso: true,
            estudiante,
            msg: 'Todo bien',
            token,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.login = login;
