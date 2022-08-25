import { Module } from '@nestjs/common';
import { VideodevicesService } from './videodevices.service';
import { VideodevicesController } from './videodevices.controller';
import { VideoDevice } from './entities/videodevice.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VideoDevice])],
  controllers: [VideodevicesController],
  providers: [VideodevicesService]
})
export class VideodevicesModule {}
