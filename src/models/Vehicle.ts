import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinColumn,
} from "typeorm";

import Brand from "../models/Brand";
import Model from "../models/Model";

@Entity("vehicles")
class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("money")
  value: number;

  @Column()
  brand_id: number;

  @ManyToOne((type) => Brand)
  @JoinColumn({ name: "brand_id" })
  brand: Brand;

  @Column()
  model_id: number;

  @ManyToMany((type) => Model)
  @JoinColumn({ name: "model_id" })
  model: Model;

  @Column({ type: "int", width: 4 })
  year_model: number;

  @Column()
  fuel: string;
}

export default Vehicle;
