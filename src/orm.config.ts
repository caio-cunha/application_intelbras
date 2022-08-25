import {TypeOrmModuleOptions} from '@nestjs/typeorm'
import { VideoDevice } from './videodevices/entities/videodevice.entity'

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    username: 'cnailhduhthqvb',
    password: '2205b6d10e0f0d4f456d370e80241862f7fbab3b519e7ba623f0c2b50d366cb6',
    port: 5432,
    host: 'ec2-34-227-120-79.compute-1.amazonaws.com',
    database: 'd8i8oepqkqvr8p',
    synchronize: true,
    entities: [VideoDevice], 
}