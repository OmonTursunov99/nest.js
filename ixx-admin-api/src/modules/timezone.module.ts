import { Module } from '@nestjs/common';
import { TimezoneProvider } from '../providers/timezone.provider';

@Module({
    providers: [TimezoneProvider],
    exports: [TimezoneProvider],
})
export class TimezoneModule {}