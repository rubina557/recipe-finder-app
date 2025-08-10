import React from "react";
import { Link } from "react-router-dom";
import {
  GiHealthNormal,
  GiSandsOfTime,
  GiMagnifyingGlass,
} from "react-icons/gi";
import FadeIn from "../components/FadeIn";
import heroImage from "../assets/images/women-chef.jpg";
import choppingGreensImage from "../assets/images/man.jpeg";

const HeroSection = () => (
  <div className="relative bg-neutral-subtle overflow-hidden">
    <div className="container mx-auto px-4 py-20 md:py-32 text-center relative z-10">
      <FadeIn>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Fresh, Fast, and Flavorful
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Find wholesome, easy-to-make recipes in seconds. From fresh
          ingredients to delicious meals, enjoy cooking without the hassle—no
          processed shortcuts, just real food made simple.
        </p>
        <Link to="/recipes">
          <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary-focus transition-all duration-300 transform hover:scale-105">
            Start exploring
          </button>
        </Link>
      </FadeIn>
    </div>
    <div className="absolute inset-0 z-0">
      <img
        src={heroImage}
        alt="Woman chef preparing a healthy meal in a bright kitchen"
        className="w-full h-full object-cover opacity-10"
      />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  </div>
);

const FeaturesSection = () => (
  <div className="container mx-auto px-4 py-16 md:py-24">
    <FadeIn>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        What you'll get
      </h2>
    </FadeIn>
    <div className="grid md:grid-cols-3 gap-12 text-center">
      <FadeIn direction="left" delay={0.2}>
        <div className="flex flex-col items-center">
          <div className="bg-amber-100 p-4 rounded-full mb-4 inline-block">
            <GiHealthNormal className="text-3xl text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            Whole-food recipes
          </h3>
          <p className="text-gray-600">
            Each dish uses everyday, unprocessed ingredients.
          </p>
        </div>
      </FadeIn>

      <FadeIn direction="left" delay={0.4}>
        <div className="flex flex-col items-center">
          <div className="bg-amber-100 p-4 rounded-full mb-4 inline-block">
            <GiSandsOfTime className="text-3xl text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            Healthy Hacks
          </h3>
          <p className="text-gray-600">
            All recipes are designed to make eating healthy quick and easy.
          </p>
        </div>
      </FadeIn>

      <FadeIn direction="left" delay={0.6}>
        <div className="flex flex-col items-center">
          <div className="bg-amber-100 p-4 rounded-full mb-4 inline-block">
            <GiMagnifyingGlass className="text-3xl text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            Search in seconds
          </h3>
          <p className="text-gray-600">
            Filter by name or ingredient and jump straight to the recipe you
            need.
          </p>
        </div>
      </FadeIn>
    </div>
  </div>
);

const RealLifeSection = () => (
  <div className="bg-white py-16 md:py-24">
    <div className="container mx-auto px-4 text-center">
      <FadeIn direction="left">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Built for real life
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          Cooking shouldn't be complicated. These recipes come in under{" "}
          <strong className="text-primary">30 minutes</strong> of active time,
          fit busy schedules, and taste good enough to repeat.
        </p>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mt-4">
          Whether you're new to the kitchen or just need fresh ideas, we've got
          you covered.
        </p>
      </FadeIn>
    </div>
  </div>
);

const ImageDivider = () => (
  <div className="h-96">
    <img
      src={choppingGreensImage}
      alt="Person chopping fresh green vegetables on a wooden board"
      className="w-full h-full object-cover"
    />
  </div>
);

const CtaSection = () => (
  <div className="bg-neutral-subtle py-20">
    <div className="container mx-auto px-4 text-center">
      <FadeIn>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to cook smarter?
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Hit the button, pick a recipe, and get dinner on the table.
        </p>
        <Link to="/recipes">
          <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary-focus transition-all duration-300 transform hover:scale-105">
            Browse recipes
          </button>
        </Link>
      </FadeIn>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <RealLifeSection />
      <ImageDivider />
      <CtaSection />
    </div>
  );
};

export default HomePage;
