import Usuario from '../models/Usuario'

export default {
    render(usuario: Usuario) {
        return {   
                id: usuario.id,
                nome: usuario.nome,
                imagem:`http://192.168.42.89:3333/uploads/${usuario.imagem}`,
                capa: usuario.capa,
                texto_resumitivo: usuario.texto_resumitivo,
                temas_interesse: usuario.temas_interesse,
                coordenadas: usuario.coordenadas,
                debates_publicos_criados: usuario.debates_publicos_criados,
               
        }
    },
    renderMany(usuarios: Usuario[]){
        return usuarios.map(usuario => this.render(usuario))
    }
}