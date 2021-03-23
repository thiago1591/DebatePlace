import Debate_publico from '../models/DebatePublico'

export default {
    render(debate_publico: Debate_publico) {
        return {   
            id_user: 3,
            imagem_user: "fernando.jpg",
            nome_user: "Fernando Silva",
            id_debate: 7,
            titulo_debate: "Os correios devem ser privatizados?",
            mensagem_debate: "Medidas importantes estão sendo encaminhadas em direção a privatização dos correios, o que leva ao debate, a empresa deveria realmente ser privatizada?",
            id_user_resposta: 3,
            nome_user_resposta: "Fernando Silva",
            imagem_user_resposta: "fernando.jpg",
            mensagem_resposta: "Acredito que os correios não deviam ser privatizados pois apesar de isso ser benéfico para as capitais, as regiões mais isoladas seriam prejudicadas"
               
        }
    },
    renderMany(debate_publico: Debate_publico[]){
        return debate_publico.map(usuario => this.render(usuario))
    }
}