import { IsNumber, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class ResponseCreateUserDto {

  @IsString()
  @ApiProperty()
  id_user: string;

  @IsNumber()
  @ApiProperty()
  statusCode: number;

  @IsString()
  @ApiProperty()
  message: string;
}
