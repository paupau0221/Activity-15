import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrl: './fruit.component.css'
})
export class FruitComponent {
  fruitLit: string[] = ["Strawberry", "Watermelon", "Apple"];
  item: string = '';

  addItems() {
    this.fruitLit.push(this.item);
  }

  deleteFruit(index: number) {
    this.fruitLit.splice(index, 1);
  }
}
