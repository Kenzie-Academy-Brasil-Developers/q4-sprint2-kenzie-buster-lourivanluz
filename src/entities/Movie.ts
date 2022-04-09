import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Stock } from "./Stock";
import { UserMovies } from "./UserMovies";

@Entity("movies")
export class Movie {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ nullable: false })
  duration: string;

  @OneToMany(() => UserMovies, (userMovies) => userMovies.movies)
  userMovies: Movie[];

  @OneToOne(() => Stock, { nullable: true })
  @JoinColumn()
  stock: Stock;
}
