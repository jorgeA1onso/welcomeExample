import { Module } from '@nestjs/common';
import { UserModule } from './user/modules/user.module';
import { ProfessionModule } from './profession/modules/profession.module';

@Module({
  imports: [UserModule, ProfessionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
