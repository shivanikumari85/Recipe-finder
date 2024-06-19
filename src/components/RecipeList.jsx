import React from "react";
import { Container, Header, Grid } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipes, searchedQuery }) => {
    return (
        <Container>
            <Header
                size="huge"
                content={`RECIPE LIST FOR ${searchedQuery}`}
                textAlign='center'
            />
            <Grid columns={4} doubling>
                {
                    recipes && recipes.map((recipe, index) => (
                        <Grid.Column key={index}>
                            <RecipeListItem recipe={recipe} />
                        </Grid.Column>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default RecipeList;
