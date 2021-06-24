import './index.css'
import React, { useEffect, useState } from 'react';
import RecipeTitle from './RecipeTitle'
import IngredientList from './IngredientList'

function App() {
    const initialRecipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ]
    };

    // Create recipe state
    const [recipe, setRecipe] = useState(initialRecipe);

    // Add new state property
    const [ prepared, setPrepared ] = useState(false);

    // Create ingredientClick event listener
    function ingredientClick(index) {
        const updatedRecipe = { ...recipe };
        updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[index].prepared;
        setRecipe(updatedRecipe);
    }

    // Add the effect hook
    useEffect(() => {
        setPrepared(recipe.ingredients.every(i => i.prepared));
    }, [recipe]);

    return (
        <article>
            <h1>Recipe Manager</h1>

            {/* Pass recipe metadata to RecipeTitle */}
            <RecipeTitle title={recipe.title} feedback={recipe.feedback} />

            {/* Pass ingredients and event listener to IngredientList */}
            <IngredientList ingredients={recipe.ingredients} onClick={ ingredientClick } />

            {/* Add the prep work display */}
            { prepared ? <h2>Prep work done!</h2> : <h2>Just keep chopping.</h2>}
        </article>
    )
}

export default App;
