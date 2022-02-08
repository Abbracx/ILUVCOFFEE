import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of a coffee' })
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly brand: string;

  // each true says expected value are arrays of strings
  @ApiProperty()
  @IsString({ each: true })
  readonly flavors: string[];
}
