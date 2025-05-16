import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { user_s as UserModel } from '@prisma/client';

export class ResponseGetUserDto {
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsString()
  @ApiProperty()
  message: string;

  @IsNumber()
  @ApiProperty()
  statusCode: number;

  static fromEntity(user: UserModel): ResponseGetUserDto {
    const dto = new ResponseGetUserDto();
    dto.id = user.id;
    dto.message = 'Usuario encontrado';
    dto.statusCode = 200;
    return dto;
  }
}
