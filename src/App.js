import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/customize-Bootstrap.scss';
import './assets/css/vendor/style.min.css';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Services from './Services';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
  <>
    <Header />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/Services" component={Services}/>
      </Switch>
    <Footer />
  </>  
  );
}

export default App;
