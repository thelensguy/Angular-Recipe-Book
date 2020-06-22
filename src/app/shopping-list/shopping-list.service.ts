import { Ingredients } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('Strawberries', 8),
    new Ingredients('Blueberries', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
