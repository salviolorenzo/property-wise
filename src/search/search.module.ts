import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { RealtyInUSService } from 'src/api/realty-in-us/realty-in-us.service';
import { RealtyMoleService } from 'src/api/realty-mole/realty-mole.service';

@Module({
  controllers: [SearchController],
  providers: [SearchService, RealtyInUSService, RealtyMoleService],
})
export class SearchModule {}
