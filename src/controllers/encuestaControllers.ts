import { Request, Response } from "express";
import Respuestas from "../models/respuestas";
import { IRequest } from '../interfaces/IValidateJwt';
import { IEncuesta } from '../interfaces/IEncuestas';
import Preguntas from "../models/Preguntas";
import { ids } from '../helpers/ids';
import Estudiante from "../models/estudiantes";


export const responderEncuesta = async(req: Request, res: Response) => {
    const encuesta: IEncuesta[]  = req.body.encuesta
    const { uid, user} = req
    console.log('uid', uid)
    if(encuesta.length === 0) return res.status(400).json({mensaje: 'Debe de tener la encuesta llena'})
    try {
        
        for (let i = 0; i < encuesta.length; i++) {
            const enc = encuesta[i];
            
            await Respuestas.create({
                respuesta: enc.respuesta, 
                pregunta_id: enc.pregunta_id, 
                
                estudiante_id: uid,
                
            })
            
        }
        
    
        const respuestas = await  Respuestas.findAll({
            where: {
                estudiante_id: uid
            }
        })

        if (respuestas.length === 0) {
            res.status(404).json({
                mensaje: 'No se encuentran respuestas'
            })
        }
        const estudiante = await Estudiante.findByPk(uid)
        const estudianteUpdate = await estudiante?.update({responde_encuesta: true})
        // console.log('estudianteUpdate', estudianteUpdate)
        res.status(201).json({
            exitoso: true,
            mensaje: 'Encuesta respondida con éxito',
            respuestas,
            uid
            
            
        })
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'Contacte al estudiante'})
    }
    
}


export const obtenerPreguntas = async(req: Request, res: Response) => {

    const preguntas = await Preguntas.findAll({
        where: {
            encuesta_id: ids.encuestaPrincipal
        }
    })

    res.status(201).json({
        exitoso: true,
        data: preguntas
    })
}