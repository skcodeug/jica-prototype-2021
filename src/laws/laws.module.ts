import { Module } from '@nestjs/common';
import { LawsService } from './laws.service';
import { LawsController } from './laws.controller';

@Module({
  providers: [LawsService],
  controllers: [LawsController],
})
export class LawsModule {}
