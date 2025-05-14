import { Controller, Get, Post, Body, Patch, Param, Delete, Query, DefaultValuePipe, ParseIntPipe as PositiveIntPipe } from '@nestjs/common';
import { ProfessionService } from '../services/profession.service';
import { Request } from '@nestjs/common';
import { CreateProfessionDto } from '../dto/create-profession.dto';
import { ResponseProfessionPaginatePto } from 'src/profession/dto/response-profession-paginate.dto';
import { ApiQuery, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';


@Controller('profession')
export class ProfessionController {
  constructor(private readonly professionService: ProfessionService) {}

  @Post()
  @ApiOperation( { summary: 'Create new profession' } )
  @ApiBody( { type: CreateProfessionDto } )
  @ApiResponse( { status: 201, description: 'Exit: new profession created' } )
  create(@Body() createProfessionDto: CreateProfessionDto) {
    return this.professionService.create(createProfessionDto);
  }


  @Get()
  @ApiOperation({ summary: 'Get professions list', description: 'Get List about professions with Pagination' })
  @ApiQuery( { name:'page', required: false, description: 'Page to retrieve, defaults to 1', type: Number } )
  @ApiQuery( { name:'pageSize', required: false, description: 'Maximum result in every call, default to 1000', type: Number } )
  async findAll(
    @Query ('page', new DefaultValuePipe(1), PositiveIntPipe) page = 1,
    @Query('pageSize', new DefaultValuePipe(3), PositiveIntPipe) pageSize = 3,
    @Request() req,) {
      const where = {};
      const skip = ( page - 1 ) * pageSize;
      const professions = await this.professionService.findAll(skip, pageSize, where);
      const totalRecords = await this.professionService.count(where);

      return new ResponseProfessionPaginatePto( professions, totalRecords, page, pageSize );
  }

  @ApiOperation({ summary: 'Get one profession by id' })
  @ApiParam({ name: 'id', type: Number, description: 'Id profession' })
  @ApiResponse({
    status: 200,
    description: 'Exit: Profession found',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.professionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.professionService.update(+id);
  }

  @ApiOperation({ summary: 'Remove one profession by id' })
  @ApiParam({ name: 'id', type: Number, description: 'Id profession' })
  @ApiResponse({
    status: 200,
    description: 'Exit: Profession remove',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professionService.remove(+id);
  }
}
