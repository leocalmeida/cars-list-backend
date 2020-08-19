import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("models", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.integer("brand_id").notNullable().references("id").inTable("brands");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("models");
}
