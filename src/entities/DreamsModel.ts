import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity({ name: "dreams"})
export class Dream {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public date: string;

  @Column()
  public was_lucid: boolean;

  @Column()
  public was_nightmare: boolean;

  @Column()
  public summary: string;

  @Column()
  public description: string;

  @Column()
  public last_meal_before_bed: string;

  @Column()
  public last_activity_before_bed: string;
}

export default Dream;
