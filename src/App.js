import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemListContainer from './components/Productos/ItemListContainer';
import ItemDetailContainer from "./components/Productos/ItemDetailContainer";
import { CartContext, CartProvider } from './components/CartContext/CartContext';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Navbar /> 
            <Switch>
              <Route exact path="/">              
                  <ItemListContainer />
              </Route>      
              <Route path="/detail/:id">
                <ItemDetailContainer />
              </Route>            
            </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;