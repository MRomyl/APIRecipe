import { useParams, Link } from "react-router-dom";
import recipes from "../data/recipes.json";

const RecipePage = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) 
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Recipe not found.</h2>;

  return (
    <div className="recipe-page">
      <Link to="/" className="back-link">← Back</Link>

      <h1>{recipe.name}</h1>

      <img src={recipe.image} alt={recipe.name} className="recipe-image" />

      {recipe.description && <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>{recipe.description}</p>}

      <div className="recipe-meta" style={{ marginBottom: "20px", fontSize: "1rem", display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        <span><strong>Prep:</strong> {recipe.prepTime}</span>
        <span><strong>Cook:</strong> {recipe.cookTime}</span>
        <span><strong>Servings:</strong> {recipe.servings}</span>
      </div>

      <h2>Ingredients</h2>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", textAlign: "left", marginBottom: "20px" }}>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ol style={{ textAlign: "left", marginBottom: "40px" }}>
        {recipe.instructions.map((step, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipePage;
