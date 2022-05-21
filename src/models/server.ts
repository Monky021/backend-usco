import express from 'express'
import cors from 'cors'
import login from '../routes/login'
import crear from '../routes/crear'
import db from '../database/connection';


class Server {

    private app: express.Application
    private port: string;
    private path: {
        login: string,
        crear: string
    }
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '4001';
        this.path={
            login: '/api/login',
            crear: '/api/crear'
        }

        //Conectar base de datos
        this.connectionDB();
        //Middlewares
        this.middlewares();
        
        //Rutas de mi servidor
        this.routes();
        
    }
    async connectionDB(){
        try {
            await db.authenticate();
            console.log('Base de datos conectada!')
        } catch (error: any) {
            throw new Error(error)
        }
        // await dbConnection();
    }

    middlewares(){
        //Cors
        this.app.use(cors());
        //Parceo del body 
        this.app.use( express.json() );
        //Directorio publico
        this.app.use(express.static('public'));
        
    }



    routes(){
        this.app.use(this.path.login, login);
        this.app.use(this.path.crear, crear);
        // this.app.use(this.paths.categories, require('../routes/categories.routes'));
        // this.app.use(this.paths.product, require('../routes/product.routes'));
        // this.app.use(this.paths.search, require('../routes/search.routes'));

    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Rest Server esta corriendo en el http://localhost:${this.port}`)
        })
    }
}


export default  Server;