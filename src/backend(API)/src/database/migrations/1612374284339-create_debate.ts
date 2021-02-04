import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createDebate1612374284339 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'debate_publico',
            columns:[
                 {
                    isPrimary:true,
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isGenerated:true,
                    generationStrategy:'increment'
                 },
                 {
                     name: 'titulo',
                    type:'varchar'
                 },
                 {
                     name:'mensagem_autor',
                     type:'text'
                 },
                {
                    name:'imagem',
                    type:'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('debate_publico')
    }

}
