import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("brands")
class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

export default Brand;
