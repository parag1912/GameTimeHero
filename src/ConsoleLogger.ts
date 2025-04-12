import { Logger } from './RsvpService';

export class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`[Logger]: ${message}`);
  }
}