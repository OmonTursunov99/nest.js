import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as moment from 'moment-timezone';

@Injectable()
export class TimezoneMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        moment.tz.setDefault('Asia/Tashkent');

        next();
    }
}
