import React from "react";
import { Link } from "react-router-dom";
import { FiUsers, FiClock } from "react-icons/fi";
import FadeIn from "./FadeIn";

const RecipeCard = ({ recipe, index }) => {
  const id = recipe.id || 1;
  const title = recipe.title || "Delicious Recipe Title";
  const image = recipe.image || "/src/assets/images/placeholder-meal.jpg";
  const servings = recipe.servings || 4;
  const readyInMinutes = recipe.readyInMinutes || 30;

  return (
    <FadeIn delay={index * 0.1}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col">
        <Link to={`/recipe/${id}`} className="flex flex-col h-full">
          <div className="overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-lg text-gray-800 truncate">
              {title}
            </h3>

            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <FiUsers /> {servings} Servings
                </span>
                <span className="flex items-center gap-1">
                  <FiClock /> {readyInMinutes} mins
                </span>
              </div>
            </div>

            <button className="w-full mt-auto pt-4 text-primary font-semibold py-2 rounded-lg transition-colors">
              View Recipe
            </button>
          </div>
        </Link>
      </div>
    </FadeIn>
  );
};

export default RecipeCard;
