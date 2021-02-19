import {Request,Response} from 'express'
import {getRepository} from 'typeorm'
import DebateSeguido from '../models/DebatesSeguidos'

export default {
    async create(req:Request,res:Response){
        try{
            const {
                id_usuario,
                id_debate
            } = req.body
            const debateSeguidoRepository = getRepository(DebateSeguido)
            const debateSeguido = debateSeguidoRepository.create({
                id_usuario,
                id_debate
            })
            await debateSeguidoRepository.save(debateSeguido)

            return (res.json({message:'debate seguido criado'}))
        } catch(err) {
            console.log('erro ==>:', err.message)
        }
    },

    async index(req:Request,res:Response){
        const {id} = req.params
        const debateSeguidoRepository = getRepository(DebateSeguido)
        const debatesSeguidos = await debateSeguidoRepository.query(`
        SELECT u.id,u.nome,u.imagem,dp.id,dp.titulo,dp.mensagem,dp.data
        FROM "Debate_Seguido" ds
        JOIN "Debate_Publico" dp
        ON dp.id = ds.id_debate
        JOIN "Usuario" u
        ON dp.autor_id = u.id
        WHERE ds.id_usuario = ${id}`)
        return res.json(debatesSeguidos)
    }
}