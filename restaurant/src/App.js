import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import NavBarManu from "./components/NavBarManu";
import HomeContainers from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarManu />
        <Route path="/list">
          <RestaurantList />
        </Route>
        <Route path="/create">
          <RestaurantCreate />
        </Route>
        <Route path="/search">
          <RestaurantSearch />
        </Route>

        <Route
          path="/update/:id"
          render={(props) => <RestaurantUpdate {...props} />}
        ></Route>
        {/* login */}
        <Route path="/login" render={(props) => <Login {...props} />}></Route>
        <Route exact path="/">
          <HeaderContainer />
        </Route>
        <Route exact path="/">
          <HomeContainers />
        </Route>
      </Router>
    </div>
  );
}

export default App;

// demo shoping cart
