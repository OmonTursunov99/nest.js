import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WarehousesModule } from "../warehouses/warehouses.module";

const URI = "mongodb+srv://omon-api:Bt8psnt4@db-nest-v2.nx7beun.mongodb.net/?retryWrites=true&w=majority&appName=db-nest-v2";
const API_CONNECT = "92.63.204.89/32";

@Module({
    imports: [
        WarehousesModule,
        MongooseModule.forRoot(URI)
    ],
    controllers: [ AppController ],
    providers: [ AppService ],
})
export class AppModule {
}
