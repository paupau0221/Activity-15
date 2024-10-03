import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  bookLit: string[] = ["Loyal Pin", "23.5", "blank the series"];
  item: string = '';

  addItems() {
    this.bookLit.push(this.item);
  }

  deleteBook(index: number) {
    this.bookLit.splice(index, 1);
  }
}
