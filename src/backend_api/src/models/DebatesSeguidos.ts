import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('Debate_Seguido')
export default class Debate_Seguido{
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column()
    id_usuario:number

    @Column()
    id_debate:number
}