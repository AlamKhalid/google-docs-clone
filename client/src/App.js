import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import TextEditor from "./TextEditor";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/documents/${uuidv4()}`} />
        </Route>
        <Route path="/documents/:id" exact component={TextEditor} />
      </Switch>
    </Router>
  );
}

export default App;
