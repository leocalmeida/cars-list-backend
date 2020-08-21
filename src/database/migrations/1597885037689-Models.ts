import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export default class Models1597885037689 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "models",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "brand_id",
            type: "int",
            isNullable: false,
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      "models",
      new TableForeignKey({
        name: "ModelsBrand",
        columnNames: ["brand_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "brands",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("models", "ModelsBrand");
    await queryRunner.dropTable("models");
  }
}
