import {
  JoinColumn,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

import Brand from "../models/Brand";

@Entity("models")
class Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand_id: number;

  @ManyToOne((type) => Brand, (brand) => brand.id)
  @JoinColumn({ name: "brand_id" })
  brand: Brand;
}

export default Model;
