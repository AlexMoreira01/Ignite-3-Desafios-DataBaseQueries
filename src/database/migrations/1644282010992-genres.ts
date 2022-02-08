import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class genres1644282010992 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "genres",
          columns:[
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "genre",
              type: "varchar",
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()",
            },
            {
              name: "updated_at",
              type: "timestamp",
              default: "now()",
            },
            {
              name: "gamesId",
              type: "uuid"
            }
          ]
        })
      )

      await queryRunner.createForeignKey("genres", 
      new TableForeignKey({
        columnNames: ["gamesId"],
        referencedColumnNames:["id"],
        referencedTableName: "games",
        onDelete: "CASCADE"
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("genres");
      // await queryRunner.dropForeignKey("genres", foreignKey)
    }

}
