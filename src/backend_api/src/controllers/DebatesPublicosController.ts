import {Request,Response} from 'express'
import {getRepository} from 'typeorm'
import DebatePublico from '../models/DebatePublico'
import Respostas from '../models/Resposta'

export default {
    async index(req:Request,res:Response){
        const debatePublicoRepository = getRepository(DebatePublico)
        const respostasRepository = getRepository(Respostas)
        const respostasArray = []
        const debatesPublicos = await 
        debatePublicoRepository.query(`
            SELECT u.id as id_user,u.imagem as imagem_user,u.nome as nome_user,
            d.id as id_debate,d.titulo as titulo_debate,d.mensagem as mensagem_debate 
            FROM "Debate_Publico" d 
            LEFT JOIN "Usuario" u 
            ON d.autor_id = u.id`)

        for (let i=0;i<debatesPublicos.length;i++){
            debatesPublicos[i].imagem_user = 
            `http://192.168.0.15:3333/uploads/${debatesPublicos[i].imagem_user}`
             const respostasLength = await respostasRepository.query(`
             SELECT id_debate FROM "Resposta" WHERE id_debate = ${debatesPublicos[i].id_debate}`)

            if(respostasLength.length != 0){

            const respostas = await respostasRepository.query(`
            SELECT u.id as id_user_resposta ,u.nome as nome_user_resposta,
            u.imagem as imagem_user_resposta, r.mensagem as mensagem_resposta 
            FROM "Resposta" r 
            INNER JOIN "Usuario" u ON r.id_usuario = u.id 
            WHERE id_debate = ${debatesPublicos[i].id_debate} 
            ORDER BY data`)

            let resposta = respostas[respostas.length - 1]
            respostasArray.push(resposta)
            debatesPublicos[i].id_user_resposta = respostasArray[i].id_user_resposta
            debatesPublicos[i].nome_user_resposta = respostasArray[i].nome_user_resposta
            debatesPublicos[i].imagem_user_resposta = `http://192.168.0.15:3333/uploads/${respostasArray[i].imagem_user_resposta}` 
            debatesPublicos[i].mensagem_resposta = respostasArray[i].mensagem_resposta
            }
        }
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