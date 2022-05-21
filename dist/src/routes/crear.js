"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crearEstudiante_1 = require("../controllers/crearEstudiante");
const router = (0, express_1.Router)();
router.post('/estudiante', crearEstudiante_1.crearEstudiante);
exports.default = router;
