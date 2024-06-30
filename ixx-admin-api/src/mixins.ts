import * as moment from 'moment-timezone';


export class Mixins {
    timeZone() {
        return moment.tz('Asia/Tashkent');
    }

    formatTimeZone() {
        console.info("new Date(this.timeZone().format(\"YYYY-MM-DDTHH:mm:ss.SSSZ\"))", new Date(this.timeZone().format("YYYY-MM-DDTHH:mm:ss.SSSZ")));
        return new Date(this.timeZone().format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
    }
}