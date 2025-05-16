import { IsNumber, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    @IsString()
    @ApiProperty()
    name_user: string;
    
    @IsString()
    @ApiProperty()
    last_name: string;

    @IsNumber()
    @ApiProperty()
    age: number;
}
