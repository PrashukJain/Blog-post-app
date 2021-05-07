import "./App.css";
import Header from "./Container/HeaderContainer";
import TodoItem from "./MyComponent/Blogs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddContainer from "./Container/AddContainer";
import Content from "./MyComponent/Content";
import Edit from "./Container/EditContainer";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header index="0" />
            <TodoItem />
          </Route>
          <Route path="/add">
            <Header index="2" />
            <AddContainer />
          </Route>
          <Route path="/content">
            <Content />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
