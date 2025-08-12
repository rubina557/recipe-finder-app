const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes";

/**
 * Searches for recipes.
 * Checks sessionStorage for cached results first before making an API call.
 */
export const searchRecipes = async (query) => {
  const cacheKey = `search_${query}`;

  // 1. Check if we have valid cached data for this specific query
  const cachedData = sessionStorage.getItem(cacheKey);
  if (cachedData) {
    console.log(`Serving search results for "${query}" from cache.`);
    return JSON.parse(cachedData);
  }

  // 2. If not in cache, make the API call
  console.log(`Fetching new search results for "${query}" from API.`);
  const response = await fetch(
    `${BASE_URL}/complexSearch?query=${query}&number=12&apiKey=${API_KEY}`
  );

  if (!response.ok) {
    // If the API call fails (e.g., 402 error), throw an error.
    throw new Error(`API call failed with status: ${response.status}`);
  }

  const data = await response.json();

  // Store the new, valid data in the cache before returning it
  sessionStorage.setItem(cacheKey, JSON.stringify(data.results));

  return data.results;
};

/**
 * Gets the details for a specific recipe.
 * Checks sessionStorage for a cached version of the recipe first.
 */
export const getRecipeDetails = async (id) => {
  const cacheKey = `details_${id}`;

  // 1. Check for a cached version of this recipe's details
  const cachedData = sessionStorage.getItem(cacheKey);
  if (cachedData) {
    console.log(`Serving details for recipe ID ${id} from cache.`);
    return JSON.parse(cachedData);
  }

  // 2. If not in cache, make the API call
  console.log(`Fetching new details for recipe ID ${id} from API.`);
  const response = await fetch(
    `${BASE_URL}/${id}/information?includeNutrition=false&apiKey=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`API call failed with status: ${response.status}`);
  }

  const data = await response.json();

  // 3. Store the new recipe details in the cache
  sessionStorage.setItem(cacheKey, JSON.stringify(data));

  return data;
};
