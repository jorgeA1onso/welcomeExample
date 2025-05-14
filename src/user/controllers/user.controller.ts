import { Controller, Get, Post, Body, Patch, Param, Delete, Query, DefaultValuePipe, ParseIntPipe as PositiveIntPipe} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { Request } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { ResponseUserPaginatePto } from '../dto/response-user-paginate.dto'
import { ApiQuery, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create new user' })
  @ApiResponse({ status: 201, description: 'Exit: New user created' })
  @ApiBody({ type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get users list', description: 'Get List about Users with Pagination' })
  @ApiQuery( { name:'page', required: false, description: 'Page to retrieve, defaults to 1', type: Number } )
  @ApiQuery( { name:'pageSize', required: false, description: 'Maximum result in every call, default to 1000', type: Number } )
    async findAll(
      @Query ('page', new DefaultValuePipe(1), PositiveIntPipe) page = 1,
      @Query('paffeSize', new DefaultValuePipe(3), PositiveIntPipe) pageSize = 3,
      @Request() req,
    ) {
      //const user = req.user_s as UserModel;
      const where = {};
      const skip = (page - 1) * pageSize;
      const users = await this.userService.findAll(skip, pageSize, where);
      const totalRecords = await this.userService.count(where);

      return new ResponseUserPaginatePto( users, totalRecords, page, pageSize )
  }

  @ApiOperation({ summary: 'Get one user by id' })
  @ApiParam({ name: 'id', type: Number, description: 'id user' })
  @ApiResponse({
    status: 200,
    description: 'Exit: User found',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.userService.update(+id);
  }

  @ApiOperation({ summary: 'Remove one user by id' })
  @ApiParam({ name: 'id', type: Number, description: 'Id profession' })
  @ApiResponse({
    status: 200,
    description: 'Exit: User remove',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
