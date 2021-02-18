import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import Usuario from './Usuario'

@Entity('Debate_Publico')
export default class DebatePublico {
    @PrimaryGeneratedColumn('increment')
    id : number;
    
    @Column()
    titulo: string;

    @Column()
    autor_id: number;

    @Column()
    mensagem: string;

    @Column()
    data: string;

}

