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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const login_1 = __importDefault(require("../routes/login"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4001';
        this.path = {
            login: '/api/login'
        };
        //Conectar base de datos
        // this.connectionDB();
        //Middlewares
        this.middlewares();
        //Rutas de mi servidor
        this.routes();
    }
    connectionDB() {
        return __awaiter(this, void 0, void 0, function* () {
            // await dbConnection();
        });
    }
    middlewares() {
        //Cors
        this.app.use((0, cors_1.default)());
        //Parceo del body 
        this.app.use(express_1.default.json());
        //Directorio publico
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.path.login, login_1.default);
        // this.app.use(this.paths.users, require('../routes/user.routes'));
        // this.app.use(this.paths.categories, require('../routes/categories.routes'));
        // this.app.use(this.paths.product, require('../routes/product.routes'));
        // this.app.use(this.paths.search, require('../routes/search.routes'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Rest Server esta corriendo en el http://localhost:${this.port}`);
        });
    }
}
exports.default = Server;
