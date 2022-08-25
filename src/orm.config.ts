import {TypeOrmModuleOptions} from '@nestjs/typeorm'
import { VideoDevice } from './videodevices/entities/videodevice.entity'

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    username: 'intelbras',
    password: '12345678',
    port: 5432,
    host: '127.0.0.1',
    database: 'postgres',
    synchronize: true,
    entities: [VideoDevice], 
}