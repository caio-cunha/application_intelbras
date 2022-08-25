import { PartialType } from '@nestjs/mapped-types';
import { CreateVideodeviceDto } from './create-videodevice.dto';

export class UpdateVideodeviceDto extends PartialType(CreateVideodeviceDto) {}
