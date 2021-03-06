import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LawsService } from './laws.service';

@ApiTags('Laws')
@Controller('laws')
export class LawsController {
  constructor(private readonly lawsService: LawsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all Laws' })
  displayLaws(): string {
    // Logic of selecting Laws built here
    return this.lawsService.displayLaws();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one Law' })
  displayLaw(@Param('id') id: number): string {
    // Logic of selecting Laws built here
    return this.lawsService.displayLaw(Number(id));
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Law' })
  deleteLaws(@Param('id') id: number): string {
    // Logic of selecting Laws built here
    return this.lawsService.deleteLaws(Number(id));
  }
}
