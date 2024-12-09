import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavbarComponet";
import homeImage from "../assets/homeImage.jpg"
function Home() {
    const [categorylist , setCategoryList] = useState([])
    const [searchResult,setSearchResult] = useState([])
    //fetch all categories
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((response)=>response.json())
            .then((data)=>setCategoryList(data.categories))
            .catch((error)=>console.log('Error fetching categories:',error))
    },[])
    //fetch meals by searching

    const handleSearch = (query) =>{
        if (!query){
            setSearchResult([])
            return;
        }
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
               .then((response)=>response.json())
               .then((data)=>setSearchResult(data.meals || []))
               .catch((error)=>console.log('Error fetching search result:',error))
    };
    
    return(
         <>
         <div className="container ">
            
              {/* Add SearchBar */}

              <NavBar onSearch={handleSearch}/>
                  {/* {render search result} */}
                  <img src={homeImage} alt="home" className="img-fluid"  style={{ objectFit: "cover", width: "100%", height: "600px" }} />
                  {searchResult.length>0?(
                    <div>
                        <h2>Search result</h2>
                        <div className="row">
                        {searchResult.map((meal)=>(
                          <div key={meal.idMeal} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mt-4">
                            <div className="card h-100">
                              <Link to={`/meal/${meal.idMeal}`}className="text-decoration-none text-dark">
                              <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top"/>
                              <div className="card-body text-center bg-black text-white">
                                    <p>{meal.strMeal}</p>
                                    </div>
                              </Link>
                          </div>
                          </div>
                          
                          
                        ))}
                       </div> 
                    </div>

                  ): 

            ( 
                 <div className="row">
                {categorylist.map((categories)=>(
                    <div key={categories.idCategory} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mt-4">
                        <div className="card h-100">
                        <Link to={`/categories/${categories.strCategory}` }className="text-decoration-none text-dark">
                        <img src={categories.strCategoryThumb} alt={categories.strCategory} className="card-img-top"
                             />
                             <div className="card-body text-center bg-black text-white">
                             <p>{categories.strCategory}</p>
                             </div>
                       
                        </Link>
                    </div>
                    </div>
                ))}
            </div>
            )}
        </div>
        </>
    )
}

export default Home