"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginCrontroller_1 = require("../controllers/loginCrontroller");
const router = (0, express_1.Router)();
router.post('/login', loginCrontroller_1.login);
exports.default = router;
