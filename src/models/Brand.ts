import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("brands")
class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

export default Brand;
