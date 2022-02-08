import { CONNREFUSED } from 'dns';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(['name', 'type']) // composite indexing containing array of columns
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Index() // single unary indexing
  @Column()
  name: string;

  //generic column where we can store events payloads
  @Column('json')
  payload: Record<string, any>;
}

//Before we can use these entity we have to add Event to the typeORM forFeature() entities array in our coffeesModule