import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BrowserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const browser = request.header(`user-agent`) || `Unknown`;
    request.headers.browser = browser.split(` `)[0];
    console.log(`Interceptor - before handler: manipulate request`)
    return next.handle();
  }
}
