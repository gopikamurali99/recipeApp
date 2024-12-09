import React,{useEffect,useState} from "react";
import { useParams,Link } from "react-router-dom";
import NavBar from "../components/NavbarComponet";

function MealDetails(){
    const {idMeal} = useParams();
    const [meal,setMeal] = useState(null);

    useEffect(()=>{

        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log("API Response:", data);
            setMeal(data.meals[0])
            console.log("id",idMeal)
        }
        )
        .catch((error)=>console.error('Error Fetching meal details:',error))
    },[idMeal])
      console.log(meal)
    if(!meal) return <p>Loading....</p>

    const ingredients = [];
    for (let i=1;i<=20;i++){
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if(ingredient){
            ingredients.push(`${ingredient} - ${measure}`)
        }

    }
    return(
        <>
        <div className="container">
            <NavBar/>
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>Ingredients</h2>
            
               <ul>
                {ingredients.map((ingredient,index)=>(
                    <li key = {index}>{ingredient}</li>
                
                ))}
               </ul>
           
            <h2>Instructions</h2>
            <p>{meal.strInstructions}</p>
        </div>
        </>
    )
}
export default MealDetails