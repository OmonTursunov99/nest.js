import { Injectable } from '@nestjs/common';
import * as moment from 'moment-timezone';
import { Moment } from "moment-timezone";

@Injectable()
export class TimezoneProvider {
    private timezone: string = 'Asia/Tashkent';

    getTimezone(): string {
        return this.timezone;
    }

    setTimezone(timezone: string): void {
        this.timezone = timezone;
        moment.tz.setDefault(timezone);
    }

    getMomentTz(): Moment {
        return moment().tz(this.timezone);
    }

    hello() {
        return new Date();
    }
}
