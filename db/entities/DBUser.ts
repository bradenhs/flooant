import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class DBUser {
  @PrimaryColumn() id!: number;

  @Column() firstName!: string;

  @Column() lastName!: string;
}
