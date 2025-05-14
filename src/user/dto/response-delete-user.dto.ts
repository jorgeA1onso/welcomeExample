import { IsNumber, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class ResponseDeleteUserDto {

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
