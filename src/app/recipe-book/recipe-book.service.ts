import { EventEmitter, Injectable } from '@angular/core';
import { RecipeBook } from './recipe-book.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeBookService {
  recipeSelected = new EventEmitter<RecipeBook>();
  private recipes: RecipeBook[] = [
    new RecipeBook(
      'Fruit Melody',
      'Refreshing and sweet!',
      'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&w=1000&q=80',
      [new Ingredients('Strawberry', 5), new Ingredients('Watermelon', 1)]
    ),
    new RecipeBook(
      'Walnut Steak',
      "I guess it's okay",
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      [new Ingredients('Steak', 1), new Ingredients('Walnut', 50)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.slService.addIngredients(ingredients);
  }
}
