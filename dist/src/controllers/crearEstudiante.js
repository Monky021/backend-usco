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
exports.crearEstudiante = void 0;
const estudiantes_1 = __importDefault(require("../models/estudiantes"));
const crearEstudiante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const {nombre, apellido, numero_documento, correo, codigo} = req.body
    const body = req.body;
    try {
        const estudiante = yield estudiantes_1.default.create(body);
        const estudianteGuardado = yield estudiante.save();
        return res.status(202).json({
            msg: 'Todo salio bien',
            estudianteGuardado
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Contacte al estudiante de pasantías'
        });
    }
});
exports.crearEstudiante = crearEstudiante;
