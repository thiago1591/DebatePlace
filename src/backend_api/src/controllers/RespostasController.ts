import {Request,Response} from 'express'
import {getRepository} from 'typeorm'
import Resposta from '../models/Resposta'

export default {
    async create(req:Request, res:Response){
        try{
            const {
                id_debate,
                id_usuario,
                mensagem,
                respostas_filhas,
                resposta_pai_id,
                data
            } = req.body

            const respostaRepository = getRepository(Resposta)

            const resposta = respostaRepository.create({
                id_debate,
                id_usuario,
                mensagem,
                respostas_filhas,
                resposta_pai_id,
                data
            })

            await respostaRepository.save(resposta)

            return res.json({message:'resposta criado!'})
        } catch (err) {
            console.log('erro: --> ', err.message)
        }
    }
}