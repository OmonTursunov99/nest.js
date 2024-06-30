import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateWarehouseDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsBoolean()
    isArchived: boolean;

    connectedShopsId: number[];
}
