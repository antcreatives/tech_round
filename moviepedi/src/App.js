
import './App.css';
import MovieCard from './components/movieCard/movieCard';
import { useEffect, useState } from 'react';
import data from "../src/content/movieList.json";



const  App = () => {

  const [term, setTerm] = useState("");
  const [filterData, setFilterData] = useState();

  const HandleFilterData = (term) => {
    
    const filtered = data.filter(function(datum) {
       if(datum["name"].toLocaleLowerCase().includes(term.toLowerCase())){
        return true
       }
       else if(datum["released_year"].toLocaleLowerCase().includes(term.toLowerCase())){
        return true
       }
       else if(datum["type"].toLocaleLowerCase().includes(term.toLowerCase())){
        return true
       }
       return false
    });
    setFilterData(filtered)
  }
const searchHandler = (event) => {
  setTerm(event.target.value)
}

useEffect(() => {
  HandleFilterData(term)
}, [term]);




console.log("value", filterData);
  return (
    <>
       <div className='App-header'>
          <div>
            <span>MoviePedia</span>
          </div>
          <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", marginTop:"10px"}}>
            <span style={{paddingRight:"10px"}}>All Movies</span>
            <span>
              About
            </span>
          </div>
          </div>
       <div style={{minHeight:"75vh"}}>
       <div style={{padding:"20px"}}>
        {term.trim()? <h3>"{term}" Movie</h3>: <h3>Search for Movie</h3>}
       <label style={{position:"relative"}} >
       <input type="search" style={{width:"250px",height:"40px",border: "3px solid #786DF6", paddingLeft:"25px"}}
        placeholder="Search for your favirote movie"
        onChange={searchHandler}
        value={term}
        />
       <i class="fa fa-search" aria-hidden="true" style={{position:"absolute",left:"10px", top:"6px"}}></i>
       </label>
       <div>

       <div className="movieCard">
       { 

          filterData  && term.trim() && filterData.map((item, index) => (
              <MovieCard
                name={item.name}
                release={item.released_year}
                image={item.img_url}
                type={item.type}
              />
          ))
          
          }
          
       </div>
       {term.trim() ? null :  <h2 style={{textAlign:"center",fontSize:"25px"}}>Welcome to MoviePedia</h2>}
        
       
       </div>
       </div>
       </div>
       <div className="App-footer">
       <span>CopyRigth 2021</span>
          <span>Follow us on Instagram</span>
       </div>
        </>
  );
}

export default App;
