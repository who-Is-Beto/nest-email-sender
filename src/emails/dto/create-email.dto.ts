import { IsString } from 'class-validator';

export class CreateEmailDto {
  @IsString()
  readonly email: string;
  @IsString()
  readonly subject: string;
}
