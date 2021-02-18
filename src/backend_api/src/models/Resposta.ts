import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('Resposta')
export default class Resposta {
    @PrimaryGeneratedColumn('increment')
    id : number;
    
    @Column()
    id_debate: number;

    @Column()
    id_usuario: number;

    @Column()
    mensagem: string;

    @Column()
    respostas_filhas: number;

    @Column()
    resposta_pai_id: number;

    @Column()
    data: string;
}

