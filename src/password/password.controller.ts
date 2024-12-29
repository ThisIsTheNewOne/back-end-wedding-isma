import { Controller, Get } from '@nestjs/common';

@Controller('password')
export class PasswordController {
    @Get('get-password')
    getPassword(): { password: string } {
      const basePassword = '12345';
      const timestamp = Math.floor(Date.now() / 600000);  // Divide by 10 min (in ms)
      const dynamicPassword = `${basePassword}-${timestamp}`;
      return { password: dynamicPassword };
    }
  }
