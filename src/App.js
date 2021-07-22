import './App.css';
import {Switch , Route , Redirect} from "react-router-dom"
import Project from "./components/Page/Project/Project"
import About from './components/Page/About/About';
import Home from './components/Page/Home/Home';
import Layout from './components/Layout/Layout';
function App() {
  return (
    <div className="App">
      <Layout >
        <Switch>
          <Route  path="/project" component={Project} />
          <Route  path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Redirect path="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
