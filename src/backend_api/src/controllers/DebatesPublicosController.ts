import {Request,Response} from 'express'
import {getRepository} from 'typeorm'
import DebatePublico from '../models/DebatePublico'

export default {
    async index(req:Request,res:Response){
        const debatePublicoRepository = getRepository(DebatePublico)
        const debatesPublicos = await debatePublicoRepository.query(`select u.id,u.imagem,u.nome,d.id,d.titulo,d.mensagem from "Debate_Publico" as d 
        left join "Usuario" as u on d.autor_id = u.id`)
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
                autor_id,
                mensagem,
                data
            } = req.body
        
            const debatePublicoRepository = getRepository(DebatePublico)
        
            const debatePublico = debatePublicoRepository.create({
                titulo,
                autor_id,
                mensagem,
                data
            })
        
            await debatePublicoRepository.save(debatePublico)
        
            return res.json({message:'Criando Debate Publico'})
           } catch(err) {
               console.log('err.message :>> ', err.message)
           }
    }
}