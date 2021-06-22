import React from 'react';

function RecipeSteps(props) {
    // Create the list items using map
    const stepsItems = props.steps.map((step, index) => {
        return (
            // Return the desired HTML for each ingredient
            <li key={index}>{ step }</li>
        );
    });

    // return the HTML for the component
    return (
        <ol>
            { stepsItems }
        </ol>
    );
}

export default RecipeSteps;