import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemListContainer from './components/Productos/ItemListContainer';
import ItemDetailContainer from "./components/Productos/ItemDetailContainer";
import Figuras from "./components/Productos/Figuras";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar /> 
          <Switch>
            <Route exact path="/">              
              <Link to="/figuras/:id">
                <ItemListContainer />
              </Link> 
            </Route>      
            <Route path="/figuras/:id">
              <h1>Hola, soy el item detail Container</h1>
              <Figuras />
              {/* <ItemDetailContainer /> */}
            </Route>            
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;