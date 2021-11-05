import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";
import Sidebar from "./Components/Sidebar/Sidebar";
import ListNotes from "./Components/ListNotes/ListNotes";
import MainArea from "./Components/MainArea/MainArea";
import DisplayNote from "./Components/DisplayNote/DisplayNote";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={ListNotes} />
        <Route path="/edit" exact component={MainArea} />
          <Route path="/displayNote/:id" exact component={DisplayNote} />
      </Switch>
    </Router>
  );
}

export default App;
