// src/RecipeDetails.tsx
import * as React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Recipe Details</h1>
      <p>Details for recipe ID: {id}</p>
    </div>
  );
};

export default RecipeDetails;
