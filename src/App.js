import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from './components/Productos/ItemListContainer';
import ItemDetailContainer from "./components/Productos/ItemDetailContainer";
import { CartProvider } from './components/CartContext/CartContext';
import Cart from './components/Navbar/Cart';
import Opiniones from './components/Opiniones/opiniones';
import Carrusel from './components/Carrusel';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="body">
          <Navbar /> 
            <Switch>
              <Route exact path="/">              
                <Carrusel />
              </Route> 
              <Route exact path="/categoria/:catId">
                <ItemListContainer />
              </Route>      
              <Route exact path="/categoria/:catId/:id">
                <ItemDetailContainer />
              </Route>     
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/opiniones">
                <Opiniones />
              </Route>
            </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;