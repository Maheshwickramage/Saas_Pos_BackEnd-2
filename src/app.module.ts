import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/casheir/book.module';
import { AddinventoryController } from './book/addinventory/addinventory.controller';
import { AddinventoryService } from './book/addinventory/addinventory.service';
import { AddinventoryModule } from './book/addinventory/addinventory.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    BookModule,
    AddinventoryModule,
  ],
  controllers: [AppController, AddinventoryController],
  providers: [AppService, AddinventoryService],
})
export class AppModule {}
