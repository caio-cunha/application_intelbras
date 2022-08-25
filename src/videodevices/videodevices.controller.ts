import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VideodevicesService } from './videodevices.service';
import { CreateVideodeviceDto } from './dto/create-videodevice.dto';
import { UpdateVideodeviceDto } from './dto/update-videodevice.dto';

@Controller('videodevices')
export class VideodevicesController {
  constructor(private readonly videodevicesService: VideodevicesService) {}

  @Post()
  create(@Body() createVideodeviceDto: CreateVideodeviceDto) {
    return this.videodevicesService.create(createVideodeviceDto);
  }

  @Get()
  findAll() {
    return this.videodevicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videodevicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideodeviceDto: UpdateVideodeviceDto) {
    return this.videodevicesService.update(+id, updateVideodeviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videodevicesService.remove(+id);
  }
}
