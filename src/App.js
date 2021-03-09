import React from 'react';
import Inspector from './Components/Inspector/Inspector';
import Creator from './Components/Creator/Creator'
import Navigation from './Components/Navigation/Navigation'
import { Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
        <Navigation />
      <Switch>
      <Route path="/" component={Creator} exact />
      <Route path="/inspect" component={Inspector} />
      </Switch>
    </div>
  );
}

export default App;
