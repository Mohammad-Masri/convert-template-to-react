import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" name="Home" render={(props) => <Layout {...props} />} />
      </Switch>
      {/* <Layout /> */}
    </BrowserRouter>
  );
}

export default App;
