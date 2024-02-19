import { Injectable } from '@nestjs/common';
import { Provider } from './provider.model';
import { CreateProviderDto } from './dto/create-provider.dto';

@Injectable()
export class ProviderService {
  private providers: Provider[] = [];

  async createProvider(
    createProviderDto: CreateProviderDto,
  ): Promise<Provider> {
    const newProvider: Provider = {
      id: Math.random().toString(),
      ...createProviderDto,
    };
    this.providers.push(newProvider);
    return newProvider;
  }

  async findAllProviders(): Promise<Provider[]> {
    return this.providers;
  }
}
