import { ApiProperty } from '@nestjs/swagger';
import { ResponseGetProfessionDto } from 'src/profession/dto/response-get-profession.dto';

export class ResponseProfessionPaginatePto {
  @ApiProperty({ type: [ResponseGetProfessionDto] })
  data: ResponseGetProfessionDto[];

  @ApiProperty()
  totalRecords: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  pageSize: number;

  @ApiProperty()
  totalPages: number;

  constructor(
    data: ResponseGetProfessionDto[],
    totalRecords: number,
    page: number,
    pageSize: number
  ) {
    this.data = data;
    this.totalRecords = totalRecords;
    this.page = page;
    this.pageSize = pageSize;
    this.totalPages = Math.ceil(totalRecords / pageSize);
  }
}