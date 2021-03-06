import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LawsModule } from './laws/laws.module';

@Module({
  imports: [ConfigModule.forRoot(), LawsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
