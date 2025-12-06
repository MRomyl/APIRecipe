import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import recipesData from "../data/recipes.json";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipesData.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-wrapper">
      <Header />
      <div className="search-container">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default Home;
