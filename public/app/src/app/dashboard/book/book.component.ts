import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { BookService } from './book.service';

import { BooklistFilterPipe } from './booklist-filter.pipe';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit {

public books: any;
// Already added to master
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService) { }

  ngOnInit() {
    this.getBooklist();
  }

  getBooklist(){
    this.bookService.get().subscribe(
      response => {
        this.books = response;
        console.log(this.books);
      },
      error => {
        console.log(error);
      }
    );
  }
  editBookList(book){
    
  }

}
