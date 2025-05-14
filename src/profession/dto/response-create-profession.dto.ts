import { IsNumber, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class ResponseCreateProfessionDto {

  @IsString()
  @ApiProperty()
  id_profession: string;

  @IsNumber()
  @ApiProperty()
  statusCode: number;

  @IsString()
  @ApiProperty()
  message: string;
}
