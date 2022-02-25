import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/search.css";
// import Cards from './components/Cards';

const Search = () => {

  const appKey = "a5cf72ed0dabf9f3f0651254233f61ae";

  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [request, setRequest] = useState("");

  useEffect(() => {
    handlemovies();
  },[request]);

  const handlemovies = async () => {
    const answer = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${appKey}`);
    const data = await answer.json();
    setMovie(data)

  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const desiredMovie = (e) => {
    e.preventDefault();
    setRequest(search);
    setSearch("");

  }
  return (
    <Form className="search-form" onSubmit={desiredMovie}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Search</Form.Label>
        <Form.Control type="text" placeholder="Search" value={search} onChange={handleSearch}/>
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
  );
};

export default Search;
