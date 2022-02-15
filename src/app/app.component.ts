import { Component, OnInit } from '@angular/core';
import { Book } from './models/book.model';
import { BookService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private booksService: BookService){}

  ngOnInit(): void {
    this.booksService.getBooks('PHP').subscribe(books=>{
      this.books = books;
    });
  }

  books: Book[] = []

  onSearchValue(searchKey: string){
    this.booksService.getBooks(searchKey).subscribe(books=>{
      this.books = books;
    });
  }
}
