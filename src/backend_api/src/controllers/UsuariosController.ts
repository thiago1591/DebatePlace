import {Request,Response} from 'express'
import {getRepository} from 'typeorm'
import usuarioView from '../views/usuarios_view'

import Usuario from '../models/Usuario'

export default {
    async create(req:Request, res:Response){
        try{
            const {
                nome,
                capa,
                texto_resumitivo,
                temas_interesse,
                coordenadas,
                debates_publicos_criados
            } = req.body

            const usuarioRepository = getRepository(Usuario)

            const imagem = req.file.filename
            

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

            return res.json(usuario)
        } catch (err) {
            console.log('erro: --> ', err.message)
        }
    },

    async show(req:Request,res:Response){
        const {id} = req.params
        const usuarioRepository = getRepository(Usuario)
        const usuario = await usuarioRepository.findOneOrFail(id)
        return res.json(usuarioView.render(usuario))
    },
    
    async index(req:Request,res:Response){
        const usuarioRepository = getRepository(Usuario)
        const usuarios = await usuarioRepository.find()
        return res.json(usuarioView.renderMany(usuarios))
    }
}