import { Component } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {
  animalList: string[] = ["Dog", "Cat", "Elephant"];
  item: string = '';

  addItems() {
    this.animalList.push(this.item);
  }

  deleteAnimal(index: number) {
    this.animalList.splice(index, 1);
  }
}
