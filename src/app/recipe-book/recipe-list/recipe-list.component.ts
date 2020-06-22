import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeBook } from '../recipe-book.model';
import { RecipeBookService } from '../recipe-book.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeBook>();
  recipes: RecipeBook[];

  constructor(private recipeBookService: RecipeBookService) {}

  ngOnInit(): void {
    this.recipes = this.recipeBookService.getRecipes();
  }

  onRecipeSelected(recipe: RecipeBook) {
    this.recipeWasSelected.emit(recipe);
  }
}
