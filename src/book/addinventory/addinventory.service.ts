import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Addinventory } from '../schemas/book.schema';

@Injectable()
export class AddinventoryService {
  constructor(
    @InjectModel(Addinventory.name)
    private readonly addinventoryModel: mongoose.Model<Addinventory>,
  ) {}

  async findAll(): Promise<Addinventory[]> {
    const books = await this.addinventoryModel.find();
    return books;
  }
  async create(addinventory: Addinventory): Promise<Addinventory> {
    const res = await this.addinventoryModel.create(addinventory);
    return res;
  }
}
