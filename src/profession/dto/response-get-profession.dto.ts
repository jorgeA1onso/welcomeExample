import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { profession_s as ProfessionModel } from '@prisma/client';

export class ResponseGetProfessionDto {
  @IsNumber()
  @ApiProperty()
  id_profession: number;

  @IsString()
  @ApiProperty()
  message: string;

  @IsNumber()
  @ApiProperty()
  statusCode: number;

  static fromEntity(profession: ProfessionModel): ResponseGetProfessionDto {
    const dto = new ResponseGetProfessionDto();
    dto.id_profession = profession.id_profesion;
    dto.message = 'Profession found';
    dto.statusCode = 200;
    return dto;
  }
}
