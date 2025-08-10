import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../components/FadeIn";
import aboutImage from "../assets/images/women-chef.jpg";

const AboutPage = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* --- Header Section --- */}
        <FadeIn direction="left">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Cooking with Purpose
            </h1>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Our story and the philosophy behind every recipe we share.
            </p>
          </div>
        </FadeIn>

        <div className="bg-neutral-subtle py-20 rounded-lg">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn className="order-last md:order-first">
                <img
                  src={aboutImage}
                  alt="Plateful Recipe Finder Founder"
                  className="rounded-lg shadow-xl w-full h-auto border-4 border-white"
                />
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Plateful Recipe Finder was born from a desire to make
                  nutritious meals accessible to everyone, regardless of their
                  schedule or skill level in the kitchen.
                </p>

                {/* Blockquote to highlight a key message */}
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 my-6">
                  "Our goal is to empower you with recipes that are not only
                  good for you but also delicious and easy to prepare."
                </blockquote>

                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe that what we eat has a profound impact on our
                  well-being, and we're here to make healthy cooking a simple,
                  joyful part of your life.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* --- Core Beliefs ---*/}
        <div className="mt-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Core Beliefs
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            <FadeIn delay={0.2}>
              <div className="bg-neutral p-6 rounded-lg h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Simplicity First
                </h3>
                <p className="text-gray-600">
                  Great food doesn't need to be complex. We focus on recipes
                  with clear, step-by-step instructions and readily available
                  ingredients.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-neutral p-6 rounded-lg h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Power of Whole Foods
                </h3>
                <p className="text-gray-600">
                  We champion recipes that are built on a foundation of whole,
                  unprocessed ingredients to nourish your body and delight your
                  taste buds.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="bg-neutral p-6 rounded-lg h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Joy in the Kitchen
                </h3>
                <p className="text-gray-600">
                  Cooking should be a creative and rewarding experience, not a
                  chore. We aim to bring the fun back into your daily cooking
                  routine.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn>
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 my-4">
              Explore our collection of recipes and find your next favorite
              meal.
            </p>
            <Link to="/recipes">
              <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary-focus transition-all duration-300 transform hover:scale-105">
                Explore Recipes
              </button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default AboutPage;
