import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import DebatePublico from './DebatePublico'

@Entity('Usuario')
export default class Usuario {
    @PrimaryGeneratedColumn('increment')
    id : number;
    
    @Column()
    nome: string;

    @Column()
    imagem: string;

    @Column()
    capa: string;

    @Column()
    texto_resumitivo: string;

    @Column()
    temas_interesse: string;

    @Column()
    coordenadas: string;

    @Column()
    debates_publicos_criados: number;

}

