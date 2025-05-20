import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { professions as ProfessionModel } from '@prisma/client';

export class ResponseGetProfessionDto {
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsString()
  @ApiProperty()
  message: string;

  @IsNumber()
  @ApiProperty()
  statusCode: number;

  static fromEntity(profession: ProfessionModel): ResponseGetProfessionDto {
    const dto = new ResponseGetProfessionDto();
    dto.id = profession.id;
    dto.message = 'Usuario encontrado';
    dto.statusCode = 200;
    return dto;
  }
}
