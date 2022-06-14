import {Router} from 'express'
import { validateJWT } from '../middlewares/validate-jwt';
import { crearPqr } from '../controllers/pqrControllers';



const router = Router()



router.post('/crear', validateJWT ,crearPqr)



export default router