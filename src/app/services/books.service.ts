import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Book } from '../models/book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  private readonly apiUrl = 'https://www.googleapis.com/books/v1';

  constructor(private http: HttpClient) {}

  getBooks(searchKeys: string) {
    let formatedSearchKey: string = searchKeys.replace(' ', '+');
    return this.http
      .get<{ kind: string; totalItems: number; items: any[] }>(
        `${this.apiUrl}/volumes?printType=books&q=intitle:${formatedSearchKey}&orderBy=newest`
      )
      .pipe(
        map((res) => {
          return res.items.map((item) => {
            let imagePath = item.volumeInfo?.imageLinks?.thumbnail;
            if (!imagePath) {
              imagePath =
                'https://cdn.pixabay.com/photo/2014/09/11/18/32/books-441866_1280.jpg';
            }

            const book: Book = {
              id: item.id,
              title: item.volumeInfo.title,
              imagePath: imagePath,
              description: item.volumeInfo.description,
              authors: item.volumeInfo.authors,
              pageCount: item.volumeInfo.pageCount,
              infoLink: item.volumeInfo.infoLink,
              publishedDate: item.volumeInfo.publishedDate,
            };

            return book;
          });
        }
      )
    );
  }
}
