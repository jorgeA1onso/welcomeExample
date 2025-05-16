import { IsNumber, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class ResponseCreateUserDto {

  @IsString()
  @ApiProperty()
  id: string;

  @IsNumber()
  @ApiProperty()
  statusCode: number;

  @IsNumber()
  @ApiProperty()
  message: string;
}
