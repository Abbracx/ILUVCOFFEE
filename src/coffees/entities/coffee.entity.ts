import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() //sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn() // defines id as primary column and also autoincrement it for us.
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  //   @Column('json', { nullable: true }) // flavors stores arrays as json and makes the column optional
  //   flavors: string[];

  //@JointTable() decorator helps specify the owner side of the relationship. which in these case is the Coffee Entity
  @JoinTable()
  @ManyToMany(type => Flavor, (flavor) => flavor.coffees )
  flavors: string[];
}

//We need to make TypeORM aware of the entity inside of these child module itself
