import { Body, Controller, Post } from '@nestjs/common';
import { CreateEmailDto } from './dto';
import { EmailsService } from './emails.service';

@Controller('emails')
export class EmailsController {
  constructor(private emailsService: EmailsService) {}
  @Post('/send')
  CreateEmailMessage(@Body() data: CreateEmailDto): CreateEmailDto {
    return this.emailsService.sendEmail(data);
  }
}
