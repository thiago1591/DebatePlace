import {Request,Response} from 'express'
import {getRepository} from 'typeorm'
import Usuario from '../models/Usuario'

export default {
    async create(req:Request, res:Response){
        try{
            const {
                nome,
                imagem,
                capa,
                texto_resumitivo,
                temas_interesse,
                coordenadas,
                debates_publicos_criados
            } = req.body

            const usuarioRepository = getRepository(Usuario)

            const usuario = usuarioRepository.create({
                nome,
                imagem,
                capa,
                texto_resumitivo,
                temas_interesse,
                coordenadas,
                debates_publicos_criados
            })

            await usuarioRepository.save(usuario)

            return res.json({message:'debate publico criado!'})
        } catch (err) {
            console.log('erro: --> ', err.message)
        }
    }
}