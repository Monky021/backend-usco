import  { Response, Request, NextFunction } from "express"


import Estudiante from "../models/estudiantes";
// const jwt = require("jsonwebtoken");
import jwt from 'jsonwebtoken'
import { IRequest, IPayload } from '../interfaces/IValidateJwt';


export const validateJWT = async(req: Request, res: Response, next: NextFunction) =>{
   
    const token = req.header('token');
    console.log('token', token)
    if(!token){
        return res.status(401).json({
            msg:'No hay token en la petición'
        })
    }

    try {

        const {uid} = jwt.verify(token, process.env.SECRET || 'USCO.SOFTWAR3') as IPayload
        // console.log({payload})
        //Leer el usuario del uid
        console.log('id', uid)
        // // const user = await Estudiante.findById(uid);
        const estudiante = await Estudiante.findByPk(uid);
        console.log('estudiante', estudiante)

        if(!estudiante){
            return res.status(401).json({
                msg:'Token no válido'
            })
        }

        // //verificar el estado del usuario
        // // if(!estudiante.status){
        // //     return res.status(401).json({
        // //         msg:'Token no válido'
        // //     })
        // // }
        req.user = estudiante;
        req.uid  = uid;
        next();
        
        
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg:'token no válido'
        })
    }   


}


