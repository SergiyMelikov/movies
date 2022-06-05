import { Injectable } from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';
import { randomUUID } from 'crypto';

@Injectable()
export class MoviesService {
  private readonly movies: Movie[] = [
    {
      id: randomUUID(),
      name: 'Interstate 60',
      rating: 7.6,
      description: 'Episodes of the road',
    },
    {
      id: randomUUID(),
      name: 'Spirited Away',
      rating: 8.6,
      description: 'Sen to Chihiro no kamikakushi',
    },
    {
      id: randomUUID(),
      name: 'Dune',
      rating: 8.1,
      description: "Movie adaptation of famous Frank Herbert's novel",
    },
  ];

  findAll(name?: string): Movie[] {
    if (!name) {
      return this.movies;
    }
    const nameLowerCase = name.toLowerCase();
    return this.movies.filter((movie) =>
      movie.name.toLowerCase().includes(nameLowerCase),
    );
  }

  findOne(id: string): Movie {
    return this.movies.find((item) => item.id === id);
  }
}
