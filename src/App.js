import './App.css';
import Login from './components/Login';
import Search from './components/Search';
import Cards from './components/Cards';

function App() {
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
