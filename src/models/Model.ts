import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Brand from "../models/Brand";

@Entity("models")
class Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brandId: number;

  @ManyToOne(() => Brand)
  @JoinColumn({ name: "brand_id" })
  brand: Brand;
}

export default Model;
