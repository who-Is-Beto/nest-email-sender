import { CreateEmailDto } from './dto/create-email.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailsService {
  public sendEmail(data: CreateEmailDto): string {
    return data;
  }
}
