import {Router} from 'express'
import { crearEstudiante } from '../controllers/crearEstudiante';
import { responderEncuesta } from '../controllers/encuestaControllers';
import { validateJWT } from '../middlewares/validate-jwt';



const router = Router()



router.post('/responder', validateJWT ,responderEncuesta)



export default router