import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import FadeIn from "../components/FadeIn";
import { searchRecipes } from "../services/api";
import { FiSearch } from "react-icons/fi";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("salad");

  useEffect(() => {
    const fetchInitialRecipes = async () => {
      try {
        setLoading(true);
        const results = await searchRecipes(searchTerm);
        setRecipes(results);
      } catch (err) {
        setError("Could not fetch recipes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchInitialRecipes();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    try {
      setLoading(true);
      setError(null);
      const results = await searchRecipes(searchTerm);
      setRecipes(results);
    } catch (err) {
      setError("Could not fetch recipes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <FadeIn>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Find Your Next Favorite Meal
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Search through thousands of recipes to find the perfect dish for any
            occasion.
          </p>
        </div>
      </FadeIn>

      {/* Search and Filter Bar with Animation */}
      <FadeIn delay={0.2}>
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row gap-4 mb-12 max-w-2xl mx-auto"
        >
          <div className="flex-grow relative">
            <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or ingredient..."
              className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-focus transition-colors"
          >
            Search
          </button>
        </form>
      </FadeIn>

      {/* Recipe Grid */}
      {loading && <Spinner />}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {recipes.map((recipe, index) => (
            <RecipeCard key={recipe.id} recipe={recipe} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipesPage;
