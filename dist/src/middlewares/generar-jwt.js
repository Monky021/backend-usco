"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generarJWT = (uid) => {
    const secret = process.env.SECRET || 'secret';
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jsonwebtoken_1.default.sign(payload, secret, {
            expiresIn: '2H'
        }, (err, token) => {
            if (err) {
                console.log('Error al generar token', err);
                reject('Error al generar token');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generarJWT = generarJWT;
