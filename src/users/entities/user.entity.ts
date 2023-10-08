import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn('text')
  id: string

  @Column('text')
  login: string

  @Column({
    nullable: true
  })
  name: string

  @Column('text')
  avatar_url: string
  
  @Column('text')
  url: string
}
