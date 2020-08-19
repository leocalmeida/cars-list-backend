import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("vehicles", (table) => {
    table.increments("id").primary();
    table.integer("value").notNullable();
    table.integer("brand_id").notNullable().references("id").inTable("brands");
    table.integer("model_id").notNullable().references("id").inTable("models");
    table.integer("year_model").notNullable();
    table.string("fuel").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("vehicles");
}
