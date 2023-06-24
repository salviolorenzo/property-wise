import { Body, Controller, Post } from '@nestjs/common';
import { SearchService } from './search.service';
import { FindPropertiesByZipDto } from './dto/find-properties-by-zip.dto';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Post()
  async findPropertiesByZip(@Body() requestDto: FindPropertiesByZipDto) {
    const { zip, maxBudget } = requestDto;
    const results = await this.searchService.findPropertiesByZip(
      zip,
      maxBudget,
    );

    return results;
  }
}
