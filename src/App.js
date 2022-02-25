import { useEffect, useState } from "react";
import './App.css';
import Login from './components/Login';
import Search from './components/Search';
import Cards from './components/Cards';

function App() {

  const appID = "29dba890";
  const appKey = "a5cf72ed0dabf9f3f0651254233f61ae";
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [request, setRequest] = useState("");

  return (
    <div className="App">
     <Login/>
     <br/>
     <Search/>
     <br/>
     <Cards/>
    </div>
  );
}

export default App;
