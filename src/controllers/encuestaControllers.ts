import { Request, Response } from "express";
import Respuestas from "../models/respuestas";
import { IRequest } from '../interfaces/IValidateJwt';
import { IEncuesta } from '../interfaces/IEncuestas';


export const responderEncuesta = async(req: Request, res: Response) => {
    const encuesta: IEncuesta[]  = req.body.encuesta
    const { uid, user} = req
    if(encuesta.length === 0) return res.status(400).json({mensaje: 'Debe de tener la encuesta llena'})
    try {
        for (let i = 0; i < encuesta.length; i++) {
            const enc = encuesta[i];
            
            await Respuestas.create({
                respuesta: enc.respuesta, 
                pregunta_id: enc.pregunta, 
                
                estudiante_id: uid,
                
            })
            
        }
        
    
        const respuestas = await  Respuestas.findAll({
            where: {
                estudiante_id: uid
            }
        })
        
        
        res.json({
            respuestas,
            uid
            
            
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'Contacte al estudiante'})
    }
    
}