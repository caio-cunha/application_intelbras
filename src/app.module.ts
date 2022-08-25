import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideodevicesModule } from './videodevices/videodevices.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {config} from './orm.config'
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    VideodevicesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
