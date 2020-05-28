// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) 
//and the available ingredients (also an object) 
//and returns the maximum number of cakes Pete can bake (integer). 
//For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
//Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {
    // TODO: insert code
    const recipe_array = Object.keys(recipe);
    const available_array = Object.keys(available);


    const array_of_max = [];

    if (recipe_array.length > available_array.length) {
        return 0;
    }
    else if (!(recipe_array.every(elem1 => available_array.some(elem2 => elem1 === elem2)))) {
        return 0;
    }
    else {
        for (var property_rec in recipe) {
            if (recipe.hasOwnProperty(property_rec)) {
                for (var property_available in available) {
                    if (available.hasOwnProperty(property_available)) {
                        if ((property_available === property_rec)) {
                            array_of_max.push(Math.floor(available[property_available] / recipe[property_rec]));
                        }
                    }
                }
            }
        }
    }

    return array_of_max.sort((a, b) => a - b)[0];


}


console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));