import { Component } from '@angular/core';
import { RecipeBook } from './recipe-book.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent {
  selectedRecipe: RecipeBook;

  constructor() {}
}
