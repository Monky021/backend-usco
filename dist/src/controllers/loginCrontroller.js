"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const login = (req, res) => {
    const { correo, cedula } = req.body;
    //TODO: VALIDACION DE CORREO Y CEDULA
    //TODO: VALIDAR SI EL USUARIO EXISTE
    //TODO: VALIDAR SI LA CEDULA ES CORRECTA
    //TODO: GENERAR TOKEN JWT
    return res.status(200).json({
        exitoso: true,
        msg: 'Todo bien',
        correo,
        cedula
    });
};
exports.login = login;
