import React,{useEffect,useState} from "react";
import {useParams,Link} from 'react-router-dom';
import NavBar from "../components/NavbarComponet";

function CategoryPage(){
    const{categories} = useParams();
    const[meals, setMeals] = useState([]);

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories}`)
        .then((response)=>response.json())
        .then((data)=>setMeals(data.meals))
        .catch((error)=>console.log('Error fetching meals:',error));
    },[categories]);


    return(
        <div className="container ">
            <NavBar/>

            <h1 className="mt-4">
                {categories} Meals
            </h1>
            <div className="row">

            
                {meals.map((meal)=>(
                    <div key={meal.idMeal} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mt-4">
                        <div className="card h-100">
                        <Link to={`/meal/${meal.idMeal}`} className="text-decoration-none text-dark">
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top"
                        /></Link>
                        
                     <div className="card-body text-center bg-black text-white">
                     <p>{meal.strMeal}</p>
                     </div>
                     </div> 
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CategoryPage;