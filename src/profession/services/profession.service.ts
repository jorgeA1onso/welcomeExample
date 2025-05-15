import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfessionDto } from '../dto/create-profession.dto';
import { PrismaService } from 'src/prisma.service';
import { profession_s as ModelProfession } from 'generated/prisma';
import { profession_s as ProfessionsModel } from '@prisma/client';
import { ResponseCreateProfessionDto } from '../dto/response-create-profession.dto';
import { ResponseDeleteProfessionDto } from '../dto/response-delete-profession.dto';
import { ResponseGetProfessionDto } from '../dto/response-get-profession.dto';

@Injectable()
export class ProfessionService {
  constructor (private prisma: PrismaService){}
  async create(createProfessionDto: CreateProfessionDto): Promise<String> {
    try{ 
      const newProfession: ModelProfession = await this.prisma.profession_s.create( { data: createProfessionDto } );
      return `New profession created with id: ${newProfession.id_profesion}`;
    } catch {
      throw new NotFoundException('Error creating new profession')
    }
  }

  async findAll(skip: number, pageSize: number, where = {}): Promise<ResponseGetProfessionDto[]> {
    try {
      const allProfession_s : ModelProfession[] = await this.prisma.profession_s.findMany({
        where,
        take: pageSize, 
        orderBy: {
          id_profesion: 'asc'
        }
      });
      return allProfession_s.map((profession) => ResponseGetProfessionDto.fromEntity(profession))
    } catch (err) {
      throw new NotFoundException('Error creating new profession')
    }
  }


  async findOne(id: number): Promise<ProfessionsModel> {
    try {
    const professionFound = await this.prisma.profession_s.findUnique( {where: { id_profesion: id } } );
    if (!professionFound){
      throw new NotFoundException(`Error: User with id: ${id} not found`)
    }
    return professionFound;
    } catch (err) {
      throw new NotFoundException(err)
    }
  }

  update(id: number) {
    return `This action updates a #${id} profession`;
  }

  async remove(id: number): Promise<ResponseDeleteProfessionDto> {
    try{
    const professionRemove = await this.prisma.profession_s.delete({ where: {id_profesion: id }})
    return {
        id_profession: `Id new user ${professionRemove.id_profesion}`,
        statusCode: 201,
        message: 'Exit: new user add',
      }
    } catch {
      return {
        id_profession: `Id profession not found `,
        statusCode: 500,
        message: 'Exit: new user add',
      }
    }
  }

  async count( where = {} ): Promise<number>{
    return this.prisma.profession_s.count({ where });
  } 
}
