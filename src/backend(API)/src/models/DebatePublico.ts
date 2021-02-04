import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('debate_publico')
export default class DebatePublico {
    @PrimaryGeneratedColumn('increment')
    id : number;
    
    @Column()
    titulo: string;

    @Column()
    mensagem_autor: string;

    @Column()
    imagem: string;
}

