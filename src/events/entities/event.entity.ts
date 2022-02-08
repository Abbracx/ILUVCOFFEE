import { CONNREFUSED } from 'dns';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  name: string;

  //generic column where we can store events payloads
  @Column('json')
  payload: Record<string, any>;
}

//Before we can use these entity we have to add Event to the typeORM forFeature() entities array in our coffeesModule