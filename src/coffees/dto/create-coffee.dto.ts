import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  // each true says expected value are arrays of strings
  @IsString({ each: true })
  readonly flavors: string[];
}
