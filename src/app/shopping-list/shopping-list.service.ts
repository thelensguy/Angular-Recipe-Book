import { Ingredients } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('Strawberries', 8),
    new Ingredients('Blueberries', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  // addIngredients(ingredients: Ingredients[]) {
  //   for (let ingredient of ingredients) {
  //     this.addIngredient(ingredient);
  //   }
  // }
  addIngredients(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
