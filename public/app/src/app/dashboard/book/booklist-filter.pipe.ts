import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booklistFilter'
})
export class BooklistFilterPipe implements PipeTransform {

  transform(books: any, title: any): any {
    //check if search term is undefined
    if (title === undefined) return books;
    //return updated books array
    return books.filter(function (book) {
        return book.book_title.toLowerCase().includes(title.toLowerCase());
    });
  }

}
