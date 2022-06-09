import { Request } from "express"

export interface IRequest extends Request {
    user: any,
    uid: number
}
export interface IPayload {
    uid: number,
    iat: number,
    exp: number
}