import { Provider } from "react-redux";
import store from "./redux/store/store";
import { Route, Switch} from "react-router-dom";
import {Home, Content} from "./pages"
import NavBar from "./Components/NavBar/navbar";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/content" component={Content} />
      </Switch>
    </Provider>
  );
}

export default App;
