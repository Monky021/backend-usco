"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const loginCrontroller_1 = require("../controllers/loginCrontroller");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const router = (0, express_1.Router)();
router.post('/', [
    (0, express_validator_1.check)('correo', 'El correo es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('correo', 'Formato del correo no valido').isEmail(),
    (0, express_validator_1.check)('password', 'La contraseña es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('password', 'El correo y/o la contraseña no coinciden').isLength({ min: 6 }),
    validar_campos_1.default
], loginCrontroller_1.login);
exports.default = router;
