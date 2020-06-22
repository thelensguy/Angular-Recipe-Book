import { RecipeBook } from './recipe-book.model';

export class RecipeBookService {
  private recipes: RecipeBook[] = [
    new RecipeBook(
      'A test recipe',
      'This is simply a test',
      'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&w=1000&q=80'
    ),
    new RecipeBook(
      'Another test recipe',
      'This is simply a test',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
