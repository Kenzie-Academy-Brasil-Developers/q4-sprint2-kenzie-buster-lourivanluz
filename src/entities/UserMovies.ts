import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { IUser } from "../repositories/user/interface";
import { Movie } from "./Movie";
import { User } from "./User";

@Entity("userMovies")
export class UserMovies {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "float", nullable: false })
  total: number;

  @Column({ default: false })
  paid: boolean;

  @ManyToOne(() => User, (user) => user.userMovies)
  user: IUser;

  @ManyToOne(() => Movie, (movie) => movie.userMovies)
  movies: Movie;
}
