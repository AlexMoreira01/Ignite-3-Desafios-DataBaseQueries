import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class orders1644282388650 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "orders",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "orders",
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
              default: "now()"
            },
            {
              name: "usersId",
              type: "uuid",
            }
          ]
        })
      )

      await queryRunner.createForeignKey("orders",
      new TableForeignKey({
        columnNames: ["usersId"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE"
      }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("orders");
    }

}
