import {Router} from 'express'
import { login } from '../controllers/loginCrontroller'


const router = Router()



router.post('/', login)
router.post('/login2', login)



export default router