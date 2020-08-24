import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";

@Entity("brands")
class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

export default Brand;
