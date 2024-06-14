import React from 'react';
import recipes from './recipes';

const RecipesPage = () => {
  return (
    <div>
      <h1>Lista de Receitas</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} style={{ maxWidth: '200px' }} />
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipesPage;
