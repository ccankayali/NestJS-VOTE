/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from "@nestjs/common";
import { ProviderService } from "./provider.service";
import { CreateProviderDto } from "./create-provider.dto"; // Import the missing CreateProviderDto class

@Controller('providers')
export class ProviderController {
    constructor(private readonly providerService: ProviderService) {}

    @Post()
    async createProvider(@Body() createProviderDto: CreateProviderDto) {
        return await this.providerService.createProvider(createProviderDto);
    }

    @Get()
    async getProviders() {
        return await this.providerService.getProviders();
    }
}
