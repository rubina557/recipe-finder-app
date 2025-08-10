const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes";

export const searchRecipes = async (query) => {
  const response = await fetch(
    `${BASE_URL}/complexSearch?query=${query}&number=10&apiKey=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data = await response.json();
  return data.results;
};

export const getRecipeDetails = async (id) => {
  const response = await fetch(
    `${BASE_URL}/${id}/information?includeNutrition=false&apiKey=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipe details");
  }

  const data = await response.json();
  return data;
};
