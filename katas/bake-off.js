// secretGist name: lhl-katas--bake-off.js
/* Bake-off takes in two arrays of ingredients and an array of 2-ingredient recipes (recipe objects)
 * It returns the recipe name for which one ingredient is found in one array and the other in the other array
 * Assume there will always be a single match which suits the return statement above */

// For each recipe in recipes, call ingredientCheck to determine if an ingredient matches a bakery's supplies
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (const recipe of recipes) {
    if (ingredientCheck(bakeryA, recipe.ingredients) && ingredientCheck(bakeryB, recipe.ingredients)) {
      return recipe.name;
    }    
  }
  return 'No recipe found which matches criteria';
}

// Check if any ingredient in a bakery's supplies matches an ingredient list of a recipe
const ingredientCheck = function(bakerySupplies, ingredientList) {
  for (ingredient of ingredientList) {
    for (item of bakerySupplies) {
      if (item === ingredient) {
        return true;
      }
    }
  }
  return false;
}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
