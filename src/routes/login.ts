import {Router} from 'express'
import { check } from 'express-validator'
import { login } from '../controllers/loginCrontroller'
import validarCampos from '../middlewares/validar-campos';


const router = Router()



router.post('/', [
    check('correo', 'El correo es obligatorio').not().isEmpty(),
    check('correo', 'Formato del correo no valido').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password', 'El correo y/o la contraseña no coinciden').isLength({min: 6}),
    validarCampos
] , login)



export default router