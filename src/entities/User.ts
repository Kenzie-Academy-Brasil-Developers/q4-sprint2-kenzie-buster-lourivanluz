import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { string } from "yup";
import { UserMovies } from "./UserMovies";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: false })
  isAdm: boolean;

  @OneToMany(() => UserMovies, (userMovies) => userMovies.user)
  userMovies: UserMovies[];
}
