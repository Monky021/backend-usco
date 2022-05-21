

import jwt from 'jsonwebtoken';

export const generarJWT = (uid: number) => {
    const secret = process.env.SECRET || 'secret'
    return new Promise( (resolve, reject) => {
        const payload = {uid}
        jwt.sign(payload, secret, {
            expiresIn: '2H'
        }, (err, token) => {
            if (err) {
                console.log('Error al generar token',err)
                reject('Error al generar token')

            }else {
                resolve(token)
            }

        })
    })
}