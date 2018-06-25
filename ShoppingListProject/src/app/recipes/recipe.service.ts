import {Recipe} from '../recipes/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test','http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg'),
        new Recipe('Another Test Recipe', 'This is simply a test','http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg')
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}