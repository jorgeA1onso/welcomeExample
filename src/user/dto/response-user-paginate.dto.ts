import { ApiProperty } from '@nestjs/swagger';
import { ResponseGetUserDto } from './response-get-user.dto';

export class ResponseUserPaginatePto {
  @ApiProperty({ type: [ResponseGetUserDto] })
  data: ResponseGetUserDto[];

  @ApiProperty()
  totalRecords: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  pageSize: number;

  @ApiProperty()
  totalPages: number;

  constructor(
    data: ResponseGetUserDto[],
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
