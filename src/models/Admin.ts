import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("admins")
class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  email: string;

  @Column("varchar")
  password: string;
}

export default Admin;
