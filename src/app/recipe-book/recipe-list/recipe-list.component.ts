import { Component, OnInit } from '@angular/core';
import { RecipeBook } from '../recipe-book.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeBook[] = [
    new RecipeBook('A test recipe', 'This is simply a test', 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&w=1000&q=80'),
    new RecipeBook('A test recipe', 'This is simply a test', 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&w=1000&q=80'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
