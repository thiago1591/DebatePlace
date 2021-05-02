import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createChat1616875921101 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'Chat',
            columns:[
                {
                    isPrimary:true,
                    name:'id',
                    type:'integer'
                },
                {
                    name:'id_usuario1',
                    type:'integer'
                },
                {
                    name:'id_usuario2',
                    type:'integer'
                },
                {
                    name:'imagem_usuario2',
                    type:'varchar'
                },
                {
                    name:'topico',
                    type:'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Chat')
    }

}
