import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/search.css";
// import Cards from './components/Cards';

const Search = () => {


  const [movie, setMovie] = useState([]);
  const [find, setFind] = useState("");
  const [request, setRequest] = useState("");

  useEffect(() => {
    getMovies();
  },[request]);

  const getMovies = async () => {
    const answer = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=63da3278ddb6c0a829bb2d4a2c1d118a`);
    const data = await answer.json();
    console.log(data);
    setMovie(data)

  }

  const updateSearch = (e) => {
    setFind(e.target.value)
  }

  const desiredMovie = (e) => {
    e.preventDefault();
    setRequest(find);
    setFind("");

  }
  return (
    <Form className="search-form" onSubmit={desiredMovie}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Search</Form.Label>
        <Form.Control type="text" placeholder="Search" value={find} onChange={updateSearch}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
      <div className="movies">
        {movie.map((item, index) => (
          <li key={index}>{item}</li>
        ) )}

      </div>
    </Form>
    // <div>
    //   <form onSubmit={desiredMovie} className="search-form">
    //     <input className="search-input" placeholder="Search..." type="text" value={find} onChange={updateSearch}/>
    //     <button className="search-button">Search</button>
    //   </form>
    //   <div  className="movies">
    //     {movie.map((item, index) => ( 
    //       <li key={index}> {item}</li>
       
    //     ))}
    //   </div>
    // </div>
  );
};

export default Search;
