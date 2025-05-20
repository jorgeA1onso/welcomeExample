import { IsNumber, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfessionDto {

  @IsString()
  @ApiProperty()
  name?: string;

  @IsNumber()
  @ApiProperty()
  id_user: number;
}
