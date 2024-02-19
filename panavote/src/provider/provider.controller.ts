/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, } from "@nestjs/common";
import { ProviderService } from "../provider/provider.service"; 
import { CreateProviderDto } from "./dto/create-provider.dto";
import { Provider } from "./provider.model";

@Controller('providers')
export class ProviderController {
    constructor(private readonly providerService: ProviderService) {}

    @Post()
    async createProvider(@Body() createProviderDto: CreateProviderDto) {
        return await this.providerService.createProvider(createProviderDto);
    }

    @Get()
    async findAllProviders(): Promise<Provider[]> {
        return await this.providerService.findAllProviders();
    }
}
