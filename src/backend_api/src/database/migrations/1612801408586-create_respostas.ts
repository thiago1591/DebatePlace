import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createRespostas1612801408586 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'Resposta',
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
                    name:'id_debate',
                    type:'integer'
                },
                {
                    name:'id_usuario',
                    type:'integer'
                },
                {
                    name:'mensagem',
                    type:'text'
                },
                {
                    name:'respostas_filhas',
                    type:'integer'
                },
                {
                    name:'resposta_pai_id',
                    type:'integer'
                },
                {
                    name:'data',
                    type:'varchar'
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Resposta')
    }

}
