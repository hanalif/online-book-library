import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchForm') searchForm!: NgForm
  @Output() searchKeyValue = new EventEmitter<string>();

  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.searchKeyValue.emit(this.searchForm.value.searchKey)
  }

}
