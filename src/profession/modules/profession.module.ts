import { Module } from '@nestjs/common';
import { ProfessionService } from '../services/profession.service';
import { ProfessionController } from '../controllers/profession.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ProfessionController],
  providers: [ProfessionService, PrismaService],
})
export class ProfessionModule {}
