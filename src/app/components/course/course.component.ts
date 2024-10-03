import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  courseLit: string[] = ["COMSCI", "ACCOUNTANT", "BSIT"];
  item: string = '';

  addItems() {
    this.courseLit.push(this.item);
  }

  deleteCourse(index: number) {
    this.courseLit.splice(index, 1);
  }
}
