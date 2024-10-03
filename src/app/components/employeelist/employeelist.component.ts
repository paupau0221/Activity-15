import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  employeeLit: string[] = ["employee1", "employee2"];
  item: string = '';

  addItems() {
    this.employeeLit.push(this.item);
  }

  deleteEmployee(index: number) {
    this.employeeLit.splice(index, 1);
  }
}
