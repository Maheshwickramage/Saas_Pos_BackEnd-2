import { Module } from '@nestjs/common';
import { AddinventorySchema } from '../schemas/book.schema';
import { AddinventoryController } from './addinventory.controller';
import { AddinventoryService } from './addinventory.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Addinventory', schema: AddinventorySchema },
    ]),
  ],
  controllers: [AddinventoryController],
  providers: [AddinventoryService],
})
export class AddinventoryModule {}
