import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VideoDevice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  modelo: string;

  @Column()
  fabricante: string;

  @Column()
  serial: string;

  @Column()
  ip: string;

  @Column()
  username: string;

  @Column()
  password: string;

}
