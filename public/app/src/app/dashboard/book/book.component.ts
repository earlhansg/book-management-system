import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { BookService } from './book.service';
import { AuthorService } from '../author/author.service';
import { AlertService } from '../alert/alert.service';
import { StudentService } from './student.service';

import { BooklistFilterPipe } from './booklist-filter.pipe';

import { Book } from './book.model';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [
              BookService,
              AuthorService,
              AlertService,
              StudentService
             ]
})
export class BookComponent implements OnInit {

public books: any;
public authors: any;
public students: any;
public book_infos = [];
public value: any;
public id: any;
public updatedBook: any;
public statusUpdate: boolean = false;
public myUpdatedData = [];
// public data: Array<any>;

public Availability:Array<any> = [
    {id: 1, status: true, status_name: 'Available'},
    {id: 2, status: false, status_name: 'NotAvailable' }
];
// Already added to master
  form: FormGroup;


  // book_title = new FormControl('',  Validators.required);
  // isbn = new FormControl('',  Validators.required);
  // published = new FormControl('', Validators.required);
  // date_published = new FormControl('', Validators.required);
  // author_id = new FormControl('', Validators.required);
  // status = new FormControl('', Validators.required);
  // student_id = new FormControl('', Validators.required);

  book_title = new FormControl('',  Validators.required);
  isbn = new FormControl('',  Validators.required);
  published = new FormControl('', Validators.required);
  date_published = new FormControl('', Validators.required);
  author_id = new FormControl('', Validators.required);
  status = new FormControl('', Validators.required);
  student_id = new FormControl('', Validators.required);

  model: any = {};
  title: String;

  loaderVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private bookService: BookService,
    private authorService: AuthorService,
    private studentService: StudentService,
    private alertService: AlertService) {}

  ngOnInit() {
    this.buildForm();
    this.getBooklist();
    this.getAuthorlist();
    this.getStudentlist();
  }

  getBooklist(){
      this.bookService.get().subscribe(
        response => {
          this.books = response;
          console.log(this.books);
          this.books.map( book => {
            this.authors.map( author => {
              if(book.student_id === null && author.id === book.author_id ){
                  this.book_infos.push({
                    id: book.id,
                    student_id: book.student_id,
                    BorrowedBy: '',
                    book_title:  book.book_title,
                    author_id: author.id,
                    book_author: author.name,
                    published: book.published,
                    date_published: book.date_published,
                    is_available: book.is_available,
                    isbn: book.isbn,
                  });
              }
              else {
                this.students.map(student => {
                  if(author.id === book.author_id){
                    if(student.id === book.student_id){
                        this.book_infos.push({
                          id: book.id,
                          student_id: book.student_id,
                          BorrowedBy: `${student.firstname} ${student.lastname}`,
                          book_title:  book.book_title,
                          author_id: author.id,
                          book_author: author.name,
                          published: book.published,
                          date_published: book.date_published,
                          is_available: book.is_available,
                          isbn: book.isbn,
                        });
                    }

                  }
                  else {
                      this.alertService.error('Error');
                  }
                });
              }
            });
          })
          // console.log(this.book_infos);
        },
        error => {
          console.log(error);
        }
      );
    }



  getStudentlist(){
    return this.studentService.getStudent().subscribe(
      response => {
        this.students = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  getAuthorlist(){
    return this.authorService.getAuthor().subscribe(
      response => {
        this.authors = response;
        // console.log(this.authors);
      },
      error => {
        console.log(error);
      }
    )
  }

  buildForm(): void {

   this.form = this.fb.group({
     'book_title': this.book_title,
     'isbn': this.isbn,
     'published': this.published,
     'date_published': this.date_published,
     'author_id': this.author_id,
     'status': this.status,
     'student_id': this.student_id,
   });
 }


  createBook(book: Book) {
      if(!book.student_id) {
        book.student_id = null;
        this.bookService.addBook(book).subscribe(
          response => {
            this.value = response;
            console.log(this.value);
              this.authors.map(author => {
                if(author.id === this.value.author_id) {
                          this.book_infos.push({
                            student_id: this.value.student_id,
                            BorrowedBy: '',
                            book_title:  this.value.book_title,
                            book_author: author.name,
                            published: this.value.published,
                            date_published: this.value.date_published,
                            is_available: this.value.is_available,
                            isbn: this.value.isbn,
                          });
                          this.alertService.success('Book successfully Added', true);
                          this.form.reset();
                        }
                })
          });
      }
      else {
        this.bookService.addBook(book).subscribe(
          response => {
            this.value = response;
            this.students.map(student => {
              this.authors.map(author => {
                if(student.id === this.value.student_id && author.id === this.value.author_id ){
                  this.book_infos.push({
                    student_id: student.student_id,
                    BorrowedBy: `${student.firstname} ${student.lastname}`,
                    book_title:  this.value.book_title,
                    book_author: author.name,
                    published: this.value.published,
                    date_published: this.value.date_published,
                    is_available: this.value.is_available,
                    isbn: this.value.isbn
                  });
                }
              });
              this.alertService.success('Book successfully Added', true);
              this.form.reset();
            },
            error => {
               this.alertService.error(error);
               this.loaderVisible = false
                 }
              );
             });
      }

  }

  editBook(book) {
    this.statusUpdate = true;
    this.form = this.fb.group({
      'id': book.id,
      'book_title': book.book_title,
      'isbn': book.isbn,
      'published': book.published,
      'date_published': book.date_published,
      'author_id': this.author_id,
      'status': this.status,
      'student_id': this.student_id
    });

  }


  updateBook(updatedData) {
    if(!updatedData.student_id){
      updatedData.student_id = null;

      this.bookService.updateBook(updatedData).subscribe(
        response => {
          this.value = response;
          console.log(this.value);
          this.authors.map(author => {
            this.book_infos.map(data => {
              if(author.id == this.value.author_id && data.id == this.value.id){
                data.book_author = author.name;
                data.BorrowedBy = '';
              }
              // if condition
            })
            // map book_infos close
          })
          this.statusUpdate = false;
          this.form.reset();
        }
        // response
      );
    }
    // first condition
    else {
      this.bookService.updateBook(updatedData).subscribe(
        response => {
          this.value = response;

          this.authors.map(author => {
            this.students.map(student => {
              if(author.id == this.value.author_id && student.id == this.value.student_id){
                this.book_infos.map(data => {
                  if(data.id == this.value.id){
                    data.book_author = author.name;
                    data.BorrowedBy = `${student.firstname} ${student.lastname}`;
                  }
                })
              }
              // first condition
            })
            // map students close
          })
          // map authors close
          this.statusUpdate = false;
          this.form.reset();

        },
        // response close

        error => {
          console.log(error);
        }
        // error close
      )


    }
    // else condition
  }

  cancel(){
    this.statusUpdate = false;
    this.form.reset();
  }

 }
