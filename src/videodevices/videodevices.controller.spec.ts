import { Test, TestingModule } from '@nestjs/testing';
import { VideodevicesController } from './videodevices.controller';
import { VideodevicesService } from './videodevices.service';

describe('VideodevicesController', () => {
  let controller: VideodevicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideodevicesController],
      providers: [VideodevicesService],
    }).compile();

    controller = module.get<VideodevicesController>(VideodevicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
