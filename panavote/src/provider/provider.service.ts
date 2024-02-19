/* eslint-disable prettier/prettier */
// provider.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Provider } from '../Schemas/provider.schemas';
import { CreateProviderDto } from './dto/create-provider.dto';

@Injectable()
export class ProviderService {
  constructor(@InjectModel(Provider.name) private providerModel: Model<Provider>) {}

  async createProvider(createProviderDto: CreateProviderDto): Promise<Provider> {
    const newProvider = new this.providerModel(createProviderDto);
    return newProvider.save();
  }

  async findAllProviders(): Promise<Provider[]> {
    return this.providerModel.find().exec();
  }
}
