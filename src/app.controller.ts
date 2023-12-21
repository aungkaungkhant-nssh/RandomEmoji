import { Controller, Get, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { EmojiValidationPipe } from './common/emoji-validation/emoji-validation.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Req() req,
    @Query("index",EmojiValidationPipe)index?:number
  ) {
    console.log(index)
   return {
      emoji:this.appService.getHello(index),
      browser:req.headers.browser
   }
  }
}
