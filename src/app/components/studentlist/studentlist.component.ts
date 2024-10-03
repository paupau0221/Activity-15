import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {
  studentLit: string[] = ["Soler1", "Soler2"];
  item: string = '';

  addItems() {
    this.studentLit.push(this.item);
  }

  deleteStudent(index: number) {
    this.studentLit.splice(index, 1);
  }
}
