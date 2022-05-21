import { Request, Response } from "express"
import Estudiante from "../models/estudiantes"

export const crearEstudiante = async(req: Request, res: Response ) => {

    // const {nombre, apellido, numero_documento, correo, codigo} = req.body
    const body = req.body

    try {
        
        const estudiante = await Estudiante.create(body)

        const estudianteGuardado = await estudiante.save()

        return res.status(202).json({
            msg: 'Todo salio bien',
            estudianteGuardado
        })

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Contacte al estudiante de pasantías'
        })
    }
}