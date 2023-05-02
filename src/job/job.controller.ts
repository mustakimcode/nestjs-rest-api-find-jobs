import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';

@Controller('job')
export class JobController {
  @Get()
  async findAll(@Query() query: any): Promise<any> {
    let usedQuery = '';
    const arrayKeys = Object.keys(query);
    const allowedFilter = ['description', 'location', 'full_time', 'page'];
    arrayKeys.forEach((element) => {
      if (allowedFilter.includes(element)) {
        if (usedQuery == '') {
          usedQuery += `?${element}=${query[element]}`;
        } else {
          usedQuery += `&${element}=${query[element]}`;
        }
      }
    });

    console.log(usedQuery);
    const response = await fetch(
      `http://dev3.dansmultipro.co.id/api/recruitment/positions.json${usedQuery}`,
    );
    const result = await response.json();
    if (result.status == 200) {
      return result;
    } else {
      throw new HttpException('Data not Exist!!', HttpStatus.FORBIDDEN);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response = await fetch(
      `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`,
    );
    return await response.json();
  }
}
