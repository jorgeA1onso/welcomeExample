import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfessionDto } from '../dto/create-profession.dto';
import { PrismaService } from 'src/prisma.service';
import { professions as ProfessionsModel } from '@prisma/client';
import { ResponseDeleteProfessionDto } from '../dto/response-delete-profession.dto';
import { ResponseGetProfessionDto } from '../dto/response-get-profession.dto';

@Injectable()
export class ProfessionService {
  constructor (private prisma: PrismaService){}
  async create(createProfessionDto: CreateProfessionDto): Promise<String> {
    try{ 
      const newProfession = await this.prisma.professions.create( { data: createProfessionDto } );
      return `New profession created with id: ${newProfession.id}`;
    } catch {
      throw new NotFoundException('Error creating new profession')
    }
  }

  async findAll(skip: number, pageSize: number, where = {}): Promise<ResponseGetProfessionDto[]> {
    try {
      const allProfession_s = await this.prisma.professions.findMany({
        where,
        take: pageSize, 
        orderBy: {
          id: 'asc'
        }
      });
      return allProfession_s.map((profession) => ResponseGetProfessionDto.fromEntity(profession))
    } catch (err) {
      throw new NotFoundException('Error creating new profession')
    }
  }


  async findOne(id: number): Promise<ProfessionsModel | null> {
    try {
    const professionFound: ProfessionsModel | null = await this.prisma.professions.findUnique( {where: { id: id } } );
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
    const professionRemove = await this.prisma.professions.delete({ where: {id: id }})
    return {
        id: `Id new user ${professionRemove.id}`,
        statusCode: 201,
        message: 'Exit: new user add',
      }
    } catch {
      return {
        id: `Id profession not found `,
        statusCode: 500,
        message: 'Exit: new user add',
      }
    }
  }

  async count( where = {} ): Promise<number>{
    return this.prisma.professions.count({ where });
  } 
}
