import { IsNumber, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class ResponseDeleteUserDto {

  @IsString()
  @ApiProperty()
  id: string;

  @IsNumber()
  @ApiProperty()
  statusCode: number;

  @IsString()
  @ApiProperty()
  message: string;
}
