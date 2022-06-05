import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';
import { Movie } from './interfaces/movie.interface';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  get(@Query('name') name: string): Movie[] {
    return this.moviesService.findAll(name);
  }

  @Get(':id')
  getById(@Param('id') id: string): Movie {
    return this.moviesService.findOne(id);
  }

  @Post()
  create(@Body() createMovieDto: CreateMovieDto): string {
    return `Name: ${createMovieDto.name} Desc: ${createMovieDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(
    @Body() updateMovieDto: CreateMovieDto,
    @Param('id') id: string,
  ): string {
    return `Update ${id} - Name ${updateMovieDto.name}`;
  }
}
