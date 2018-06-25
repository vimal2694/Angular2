import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe', 'This is simply a test','http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg'),
  //   new Recipe('Another Test Recipe', 'This is simply a test','http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg')
  // ];

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe){
  //  this.recipeWasSelected.emit(recipe);
  // }


}
