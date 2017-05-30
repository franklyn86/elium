/*

You're given a recipe for chocolate cake.
However, imagine you have less than needed for one ingredient.
Adjust the recipe to cater to that amount.

Write a function that returns the adjusted recipe.
The function takes two arguments:
1) The ingredient that you're short of
2) The amount of that ingredient

The original recipe:

160g caster sugar
170g butter
3 eggs
115g self-raising flour
55g cocoa powder

*/

var recipe = {'caster sugar': 160, 'butter': 170, 'eggs': 3, 'self-raising flour': 115, 'cocao powder': 55}

function chocolateCake(ingredient, amount) {

}

console.log(chocolateCake('caster sugar', 80))
/*

Outputs
{ 'caster sugar': 80,
  butter: 85,
  eggs: 1.5,
  'self-raising flour': 57.5,
  'cocao powder': 27.5 }

*/
