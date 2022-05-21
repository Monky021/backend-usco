import { Request, Response } from "express";
import { generarJWT } from "../middlewares/generar-jwt";
import Estudiante from "../models/estudiantes";

export const login = async (req: Request, res: Response ) => {

    const {correo, password} = req.body


    try {
        //TODO: VALIDACION DE CORREO Y CEDULA

        const estudiante = await Estudiante.findOne({
            where: {
                correo
            }
        })
        //TODO: VALIDAR SI EL USUARIO EXISTE
        if (!estudiante) {
            return res.status(404).json({
                mensaje: 'Correo y/o contraseña no coinciden' 
            })
        }

        
        //TODO: VALIDAR SI LA CONTRASEÑA ES CORRECTA

        const passwordDb = estudiante.getDataValue('numero_documento')
        console.log(password ,passwordDb)
        if (password !== passwordDb ) {
            return res.status(400).json({
                mensaje: 'Correo y/o contraseña no coinciden'
            })
        }
        
        const uid = estudiante.getDataValue('id')

        //TODO: GENERAR TOKEN JWT
        const token = await generarJWT(uid)
        

        return res.status(200).json({
            exitoso: true,
            estudiante,
            msg: 'Todo bien',
            token,
            
        })
        
    } catch (error) {
        console.log(error)
    }



    
}

