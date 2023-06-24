import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { SearchModule } from './search/search.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import configuration from './config/configuration';
import { RealtyMoleService } from './api/realty-mole/realty-mole.service';

@Module({
  imports: [
    SearchModule,
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService, RealtyMoleService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware);
  }
}
