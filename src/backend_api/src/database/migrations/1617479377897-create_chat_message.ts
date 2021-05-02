import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createChatMessage1617479377897 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'Mensagem_chat',
            columns:[
                {
                    isPrimary:true,
                    name:'id_mensagem',
                    type:'integer'
                },
                {
                    name:'id_remetente',
                    type:'integer'
                },
                {
                    name:'id_chat',
                    type:'integer'
                },
                {
                    name:'conteudo',
                    type:'text'
                },
                {
                    name:'data',
                    type:'timestamp',
                    default: "now()"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('mensagem_chat')
    }

}
