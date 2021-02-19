import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createDebatesAtivos1613751967037 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'Debate_Seguido',
            columns:[
                {
                    isPrimary:true,
                    name:'id',
                    type:'integer',
                    unsigned:true,
                    isGenerated:true,
                    generationStrategy:'increment'
                },
                {
                    name:'id_usuario',
                    type:'integer'
                },
                {
                    name:'id_debate',
                    type:'integer'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Debate_Seguido')
    }

}
