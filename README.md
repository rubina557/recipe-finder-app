#  Plateful Recipe Finder 🍽️

A modern, responsive web application for discovering delicious and healthy recipes. Users can search for recipes by ingredient, view detailed instructions with images, and enjoy a clean, animated user interface built with the latest web technologies.

[![Vercel Status](https://vercel.com/rubina557/recipe-finder-app/badge)](https://recipe-finder-app-rust.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

### [**➥ View Live Demo**](https://recipe-finder-app-rust.vercel.app)

![Plateful Recipe Finder Screenshot](./public/screenshot.png)  
*(**Action Required:** Take a beautiful screenshot of your finished app, name it `screenshot.png`, and place it in your `public` folder for this image to appear.)*

---

## ✨ Key Features

- **Dynamic Recipe Search:** Find recipes by ingredients or name using the Spoonacular API.
- **Detailed Recipe View:** Access step-by-step cooking instructions, ingredient lists, and nutritional information.
- **Fully Responsive Design:** A seamless experience on desktops, tablets, and mobile devices.
- **Modern UI/UX:** Clean, intuitive interface styled with Tailwind CSS for a professional look and feel.
- **Engaging Animations:** Smooth page transitions and element animations powered by Framer Motion.
- **Client-Side Routing:** Fast and seamless navigation between pages without full-page reloads, handled by React Router.

---

## 🛠️ Tech Stack & Tools

- **Frontend:** [React](https://reactjs.org/) (built with [Vite](https://vitejs.dev/))
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **API:** [Spoonacular Food API](https://spoonacular.com/food-api)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation & Setup

1. **Clone the repository**
    ```bash
    git clone https://github.com/rubina557/recipe-finder-app.git
    cd recipe-finder-app
    ```

2. **Install NPM packages**
    ```bash
    npm install
    ```

3. **Set up your Environment Variables**
    - Create a new file named `.env` in the root of your project.
    - Add your Spoonacular API key to this file:
        ```env
        VITE_SPOONACULAR_API_KEY=YOUR_API_KEY_HERE
        ```

4. **Run the development server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 📄 License

This project is distributed under the MIT License. See the `LICENSE` file for more information.
