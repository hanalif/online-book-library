import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css']
})
export class BookPreviewComponent implements OnInit {
  @Input() book!: Book
  constructor() { }

  ngOnInit(): void {
  }

  onReadMore(){
    window.open(`${this.book.infoLink}`, '_blank')
  }
}
