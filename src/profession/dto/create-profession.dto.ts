import { IsNumber, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfessionDto {

  @IsNumber()
  @ApiProperty()
  id_profesion: number;

  @IsString()
  @ApiProperty()
  name_profesion?: string;

  @IsNumber()
  @ApiProperty()
  id_user_profession: number;
}
