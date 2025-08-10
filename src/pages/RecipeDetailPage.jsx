import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRecipeDetails } from "../services/api";
import Spinner from "../components/Spinner";
import FadeIn from "../components/FadeIn";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const details = await getRecipeDetails(id);
        setRecipe(details);
      } catch (err) {
        setError("Failed to load recipe details.");
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
  if (!recipe) return <p className="text-center mt-10">Recipe not found.</p>;

  return (
    <FadeIn>
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/recipes"
          className="text-primary hover:underline mb-4 inline-block"
        >
          &larr; Back to Recipes
        </Link>

        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {recipe.title}
          </h1>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full max-w-2xl mx-auto rounded-lg mb-6 shadow-md"
          />

          <div
            className="prose max-w-none mb-8 text-gray-700"
            dangerouslySetInnerHTML={{ __html: recipe.summary }}
          ></div>

          <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">
            Ingredients
          </h2>
          <ul className="list-disc list-inside mb-8 pl-4 space-y-1 text-gray-600">
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">
            Instructions
          </h2>
          {recipe.analyzedInstructions.length > 0 ? (
            <ol className="list-decimal list-inside space-y-4 text-gray-600">
              {recipe.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number} className="flex items-start">
                  <span className="font-bold mr-3 text-primary">
                    {step.number}.
                  </span>
                  <span className="flex-1">{step.step}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p>No instructions available for this recipe.</p>
          )}
        </div>
      </div>
    </FadeIn>
  );
};

export default RecipeDetailPage;
