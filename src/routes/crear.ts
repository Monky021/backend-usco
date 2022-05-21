import {Router} from 'express'
import { crearEstudiante } from '../controllers/crearEstudiante';



const router = Router()



router.post('/estudiante', crearEstudiante)



export default router