import {Router} from 'express'
import { crearEstudiante } from '../controllers/crearEstudiante';
import { responderEncuesta, obtenerPreguntas } from '../controllers/encuestaControllers';
import { validateJWT } from '../middlewares/validate-jwt';



const router = Router()



router.post('/responder', validateJWT ,responderEncuesta)
router.get('/listar', validateJWT, obtenerPreguntas)


export default router