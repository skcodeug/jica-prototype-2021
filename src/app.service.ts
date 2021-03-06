import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  displayMessage(): string {
    return 'LAWS API';
  }
}
