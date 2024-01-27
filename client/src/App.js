import "./App.css";
import Home from "./Screens/Home";

import About from "./components/AboutUs"
import Contact from "./components/Contact";
import TopBar from "./components/TopBar";
import { BrowserRouter , Route, Switch} from "react-router-dom"
import cart from "./components/cart";
import payment from "./components/payment";
import OrderDetails from "./components/OrderDetails";

function App() {
 

  return (
    <BrowserRouter>
      <TopBar/>
     
      <Switch>
        
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} exact/>
        <Route path ="/cart" component={cart} exact/>
        <Route path ="/contact" component={Contact} exact/>
        <Route path="/payment" component={payment} exact/>
        <Route path="/order-details" component={OrderDetails} exact/>
      </Switch>
    </BrowserRouter>
    
    
    
  );
}

export default App;
