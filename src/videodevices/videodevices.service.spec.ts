import { Test, TestingModule } from '@nestjs/testing';
import { VideodevicesService } from './videodevices.service';

describe('VideodevicesService', () => {
  let service: VideodevicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideodevicesService],
    }).compile();

    service = module.get<VideodevicesService>(VideodevicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
