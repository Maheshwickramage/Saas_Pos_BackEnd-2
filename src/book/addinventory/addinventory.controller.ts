import { Body, Controller, Get, Post } from '@nestjs/common';
import { Addinventory } from '../schemas/book.schema';
import { AddinventoryService } from './addinventory.service';

@Controller('addinventory')
export class AddinventoryController {
  constructor(private addinventoryService: AddinventoryService) {}

  @Get()
  async getAllBooks(): Promise<Addinventory[]> {
    return this.addinventoryService.findAll();
  }
  @Post()
  async createBook(
    @Body()
    book,
  ): Promise<Addinventory> {
    return this.addinventoryService.create(book);
  }
}
