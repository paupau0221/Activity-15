import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
interface HardwareComponent {
  name: string;
  quantity: number;
}
@Component({
  selector: 'app-computerhardware',
  templateUrl: './computerhardware.component.html',
  styleUrl: './computerhardware.component.css'
})
export class ComputerhardwareComponent {
  hardwareList: HardwareComponent[] = [
    { name: "CPU", quantity: 5 },
    { name: "RAM", quantity: 10 },
    { name: "Hard Drive", quantity: 8 }
  ];
  newComponent: string = '';
  newQuantity: number = 0;

  addComponent() {
    const newComponent: HardwareComponent = { name: this.newComponent, quantity: this.newQuantity };
    this.hardwareList.push(newComponent);
    this.newComponent = '';
    this.newQuantity = 0;
  }

  deleteComponent(index: number) {
    this.hardwareList.splice(index, 1);
  }
}
