import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVideodeviceDto } from './dto/create-videodevice.dto';
import { UpdateVideodeviceDto } from './dto/update-videodevice.dto';
import { VideoDevice } from './entities/videodevice.entity';
 
@Injectable()
export class VideodevicesService {

  constructor(
    @InjectRepository(VideoDevice)
    private readonly videodeviceRepository: Repository<VideoDevice>,
  ) {} 

  create(createVideodeviceDto: CreateVideodeviceDto) {
    return this.videodeviceRepository.save(createVideodeviceDto);
  }

  findAll() {
    return this.videodeviceRepository.find();
  }

  findOne(id: number) {
    return this.videodeviceRepository.findOneBy({id});
  }

  update(id: number, updateVideodeviceDto: UpdateVideodeviceDto) {
    return this.videodeviceRepository.update(
      id,
      updateVideodeviceDto
    )
  }

  remove(id: number) {
    return this.videodeviceRepository.delete(id);
  }
}
