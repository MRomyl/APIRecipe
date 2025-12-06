import { useParams, Link } from "react-router-dom";
import recipes from "../data/recipes.json";

const RecipePage = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Recipe not found.</h2>;

  return (
    <div className="recipe-page">
      <Link to="/" className="back-link">← Back</Link>

      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />

      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipePage;
