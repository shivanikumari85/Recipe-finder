import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Button, Image, Header, Segment } from "semantic-ui-react";
import { getRecipe } from "../services/api";
import { Link } from "react-router-dom";

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({});
    const { recipeId } = useParams();
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                let result = await getRecipe(recipeId);
                if (result && result.recipe) {
                    setRecipe(result.recipe);
                } else {
                    setError("Recipe not found.");
                }
            } catch (error) {
                setError("Error fetching recipe data.");
            }
        };
        getData();
    }, [recipeId]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        Object.keys(recipe).length > 0 ? (
            <Grid container stackable columns={2} className="detailsPageContent">
                <Grid.Column>
                    <Button
                        as={Link}
                        to={'/recipes'}
                        content="Back to Recipe List"
                        color="yellow"
                        style={{ marginBottom: 40 }}
                    />
                    <Image src={recipe.image_url} />
                </Grid.Column>
                <Grid.Column>
                    <Header size="medium">{recipe.title}</Header>
                    <p>Provided By: {recipe.publisher}</p>
                    <Button
                        as={"a"}
                        href={recipe.publisher_url}
                        target="_blank"
                        content="Publisher Webpage"
                        color="blue"
                    />
                    <Button
                        as={"a"}
                        href={recipe.source_url}
                        target="_blank"
                        content="Recipe URL"
                        color="green"
                    />
                    <Header size="large" content="Ingredients" />
                    <Segment.Group>
                        {recipe.ingredients.map((data, index) => (
                            <Segment key={index}>
                                <h5>{data}</h5>
                            </Segment>
                        ))}
                    </Segment.Group>
                </Grid.Column>
            </Grid>
        ) : null
    );
};

export default RecipeDetails;
