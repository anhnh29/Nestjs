import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  fullName: string;

  @Column()
  address: string;

  @Column()
  phone: number;

  @Column()
  email: string;

  @Column()
  birthDate: string;

  @Column()
  gender: string;
}
