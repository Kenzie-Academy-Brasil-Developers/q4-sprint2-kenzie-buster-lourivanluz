import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Movie } from "./Movie";

@Entity("stock")
export class Stock {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  quantity: number;

  @Column({ nullable: false, type: "float" })
  price: number;

  @OneToOne(() => Movie, { nullable: true })
  @JoinColumn()
  move: Movie;
}
