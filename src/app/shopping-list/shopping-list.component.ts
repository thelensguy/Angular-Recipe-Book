import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Strawberries', 8),
    new Ingredients('Blueberries', 5),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
