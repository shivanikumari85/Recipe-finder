
import axios from 'axios';
import {API_URL} from '../constants/constant';

export const getRecipes =async(searchedQuery) =>{
    try{
    let response=await axios.get(`${API_URL}/search?q=${searchedQuery}`);
    return response.data;
    }
    catch(error){
        console.log('Error while calling the api ', error.msg);
        return error.response
    }
}

export const getRecipe = async (recipeId) => {
    try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error while calling the API", error);
        return null;
    }
};
