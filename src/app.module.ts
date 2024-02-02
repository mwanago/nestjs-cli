import { Module } from '@nestjs/common';
import { BasicCommand } from './basic-command/basic.command';

@Module({
  providers: [BasicCommand],
})
export class AppModule {}
