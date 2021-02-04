import {Request,Response} from 'express'
import {getRepository} from 'typeorm'
import DebatePublico from '../models/DebatePublico'

export default {
    async index(req:Request,res:Response){
        const debatePublicoRepository = getRepository(DebatePublico)
        const debatesPublicos = await debatePublicoRepository.find()
        return res.json(debatesPublicos)
    },

    async show(req:Request,res:Response){
        const {id} = req.params
        const debatePublicoRepository = getRepository(DebatePublico)
        const debatePublico = await debatePublicoRepository.findOneOrFail(id)
        return res.json(debatePublico)
    },

    async create(req:Request,res:Response){
        try{
            const {
                titulo,
                mensagem_autor,
                imagem
            } = req.body
        
            const debatePublicoRepository = getRepository(DebatePublico)
        
            const debatePublico = debatePublicoRepository.create({
                titulo,
                mensagem_autor,
                imagem
            })
        
            await debatePublicoRepository.save(debatePublico)
        
            return res.json({message:'Criando Debate Publico'})
           } catch(err) {
               console.log('err.message :>> ', err.message)
           }
    }
}