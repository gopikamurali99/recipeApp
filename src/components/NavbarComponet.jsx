import React,{useState} from "react";
import { Link } from "react-router-dom";
import '../App.css'

function NavBar({onSearch}){
    const [query,setQuery] = useState("");

    const handleSearch = (e) =>{
        e.preventDefault();
        onSearch(query);
    }
    console.log(query);


return(
    <>
    <nav className="navbar p-3 sticky-top" style={{ backgroundColor: 'orange'}}>
  
        <div>
        <Link to="/"  className="navbar-brand"><span>TasteBuds</span></Link>
        </div>
    
    <div>
              
    <form onSubmit={handleSearch} className="d-flex gap-3">
        <input 
        type="text"
        placeholder="Search for recipe..." 
        value={query}
        onChange={(e)=>setQuery(e.target.value)} className="p-2 rounded-pill w-100 w-sm-75 custom-input" />
         <button 
        type="submit"  className="p-2  rounded-pill bg-black text-white"
       
    >
        Search
    </button>
    </form>
    </div>
    
    </nav> 
    </>
    
)
}

export default NavBar;
