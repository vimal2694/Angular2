import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter, Output } from "@angular/core";

export class ShoppingListService {

@Output() ingredientsAdd = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Mango', 7)
      ];
      
      getIngrdients(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsAdd.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
          this.ingredients.push(...ingredients);
     //     this.ingredientsAdd.emit(this.ingredients.slice())
      }

} 