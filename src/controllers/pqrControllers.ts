import { Request, Response } from "express";
import Pqr from "../models/pqr"


export const crearPqr = async(req: Request, res: Response) => {

    try {

        const body = req.body
        const newPqr = await Pqr.create(body)
        return res.json({msg: 'Pqr creado', data: newPqr})

        
    } catch (error) {
        console.log(error)
        res.json(500).json(error)
    }
}


export const detallePqr = async(req: Request, res: Response) => {

    try {
        const id = req.params.id
        const pqr = await Pqr.findByPk(id)

        return res.status(200).json(pqr)


    } catch (error) {
        console.log(error)
        res.json(500).json(error)
    }
}


export const listarPqr = async(req: Request, res: Response) => {
    try {
        const pqr = await Pqr.findAll()

        return res.status(200).json(pqr)
    } catch (error: any) {
        console.log(error)
        
        res.json(500).json(error)
    }
}