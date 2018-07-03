import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples',5),
  //   new Ingredient('Mango', 7)
  // ];
  ingredients: Ingredient[];
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngrdients(); 
    this.slService.ingredientsAdd.subscribe(
    (ingredients:Ingredient[])=>{
      this.ingredients=ingredients;
      }
    );
  }

  // onIngredientAdded(ingredient: Ingredient){
  //   this.shoppingService.ingredients.push(ingredient);
  // }

}
