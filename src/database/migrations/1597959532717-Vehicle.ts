import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export default class Vehicle1597959532717 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "vehicles",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "value",
            type: "money",
            isNullable: false,
          },
          {
            name: "brand_id",
            type: "int",
            isNullable: false,
          },
          { name: "model_id", type: "int", isNullable: false },
          {
            name: "year_model",
            type: "int",
            isNullable: false,
          },
          {
            name: "fuel",
            type: "varchar",
            isNullable: false,
          },
        ],
      })
    );
    await queryRunner.createForeignKeys("vehicles", [
      new TableForeignKey({
        name: "VehiclesBrand",
        columnNames: ["brand_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "brands",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      }),
      new TableForeignKey({
        name: "VehiclesModels",
        columnNames: ["model_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "models",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys("vehicles", [
      new TableForeignKey({
        name: "VehiclesBrand",
        columnNames: ["brand_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "brands",
      }),
      new TableForeignKey({
        name: "VehiclesModels",
        columnNames: ["model_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "models",
      }),
    ]);
    await queryRunner.dropTable("vehicles");
  }
}
