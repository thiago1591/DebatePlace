import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createDebatePublico1612800590426 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'Debate_Publico',
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
                    name:'titulo',
                    type:'varchar'
                },
                {
                    name:'autor_id',
                    type:'integer'
                },
                {
                    name:'mensagem',
                    type:'text'
                },
                {
                    name:'data',
                    type:'timestamp',
                    default:'now()'
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Debate_Publico')
    }

}
