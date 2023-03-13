import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  email: string;

  @Column('text')
  password: string;

  @Column('text')
  fullName: string;

  @Column('text', { nullable: false })
  companyName: string;

  @Column('bool', {
    default: true,
  })
  isActive: boolean;

  @Column('text', {
    array: true,
    default: ['user'],
  })
  roles: string[];

  @Column('text', { nullable: true })
  phone?: string;

  @Column('text', { nullable: true })
  avatar?: string;

  @Column('text', { nullable: true })
  address?: string;

  @BeforeInsert()
  checkEmailCasingBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }
  @BeforeUpdate()
  checkEmailCasingBeforeUpdate() {
    this.checkEmailCasingBeforeInsert();
  }
}
