import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { user_s as ModelUser } from '@prisma/client';
import { ResponseCreateUserDto } from '../dto/response-create-user.dto'
import { ResponseDeleteUserDto } from '../dto/response-delete-user.dto';
import { ResponseGetUserDto } from '../dto/response-get-user.dto';
import { UserWithProfession } from '../interfaces/user-with-profession-interface';
import { profession_s as ProfessionModel } from "generated/prisma";

@Injectable()
export class UserService {
  constructor (private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto): Promise <ResponseCreateUserDto>{
    try {
    const newUser = await this.prisma.user_s.create( { data: createUserDto} );
      return {
        id: `Id new user ${newUser.id}`,
        statusCode: 201,
        message: 'Exit: new user add',
    }
    } catch (error){
      return {
          id: error,
          statusCode: 500,
          message: "Internal server error"
      }
    }
  }

  async  findAll( skip: number, pageSize: number, where = {} ): Promise <ResponseGetUserDto[]> {
    try {
    const listUserFound: ModelUser[] = await this.prisma.user_s.findMany({
      where, 
      take: pageSize,
      skip,
      orderBy: {
        id: 'asc',
      },
    });
    return listUserFound.map((user) => ResponseGetUserDto.fromEntity(user));
    } catch {
      throw new NotFoundException(`Error getting all user`);
    }
  }

  async findOne(id: number): Promise <ModelUser> {
    try {
      const userFound: ModelUser | null = await this.prisma.user_s.findUnique( { where: { id: id } } )
      if (!userFound){
        throw new NotFoundException(`Id: ${id} does not exist`)
      }
      return userFound;
    } catch (err){
      throw new NotFoundException(err)
    }
  }

async findOneUserWithProfession(id: number): Promise<UserWithProfession> {
  try {
    const userFoundWithProfessions = await this.prisma.user_s.findUnique({
      where: { id: id },
      include: {
        profession_s: true,
      },
    });

    if (!userFoundWithProfessions) {
      throw new NotFoundException(`Error: User not found`);
    }

    return userFoundWithProfessions;
  } catch (err) {
    throw new NotFoundException(err);
  }
}



  update(id: number) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number): Promise<ResponseDeleteUserDto> {
    try {
      const userDelete = await this.prisma.user_s.delete( { where: { id: id } } )
        return {
          id: `Id user remove ${userDelete.id}`,
          statusCode: 201,
          message: 'Exit: new user add',
        }
    } catch (error) {
      return {
        id: error,
        statusCode: 500,
        message: `Failure: Can't remove user with id: ${id}`,
      }
    }
  }

  async count(where = {}): Promise<number> {
    return this.prisma.user_s.count({ where });
  }

}

