import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose'
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule, 
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_HOST),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
