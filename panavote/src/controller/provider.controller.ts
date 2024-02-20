/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from "@nestjs/common";
import { ProviderService } from "../service/provider.service";
import { CreateProviderDto } from "../dto/create-provider.dto";
import { Provider } from "../entities/provider.entity"; // Dikkat: Import yolu doğru olmalı. 'module' yerine 'schemas' olabilir.

@Controller('/providers')
export class ProviderController {
    constructor(private readonly providerService: ProviderService) {}

    @Post('/create-provider')
    async createProvider(@Body() createProviderDto: CreateProviderDto): Promise<Provider> {
        return this.providerService.createProvider(createProviderDto);
    }

    @Get('/all-providers')
    async findAllProviders(): Promise<Provider[]> {
        return this.providerService.findAllProviders();
    }
}
