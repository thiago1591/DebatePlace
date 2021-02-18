import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createUsuarios1612800350141 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'Usuario',
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
                    name:'nome',
                    type:'varchar'
                },
                {
                    name:'imagem',
                    type:'varchar'
                },
                {
                    name:'capa',
                    type:'varchar'
                },
                {
                    name:'texto_resumitivo',
                    type:'text'
                },
                {
                    name:'temas_interesse',
                    type:'text'
                },
                {
                    name:'coordenadas',
                    type:'varchar'
                },
                {
                    name:'debates_publicos_criados',
                    type:'integer'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Usuario')
    }

}
