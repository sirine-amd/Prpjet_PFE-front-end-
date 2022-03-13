/* import Navbar from './Navbar';
import Home from './Home'; */
import Login from './../components/Login';
import Inscription from './../components/Inscription';
import ForgetPassword from './../components/ForgetPassword';
import EmailEnvoyeForgetPassword from './../components/EmailEnvoyeForgetPassword';
import Accueil_admin from './../components/Accueil_admin';
import Reinitialiser_mdp from './../components/Reinitialiser_mdp';

import {
        BrowserRouter,
        Switch,
        Route,
        Link
      } from "react-router-dom";
//import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  
return (
        <BrowserRouter>
        <Switch>
           <Route path="/" exact component={Login}/>
           <Route path="/Inscription" exact component={Inscription}/>
           <Route path="/ForgetPassword" exact component={ForgetPassword}/>
           <Route path="/EmailEnvoyeForgetPassword" exact component={EmailEnvoyeForgetPassword}/>
           <Route path="/Accueil_admin" exact component={Accueil_admin}/>
           <Route path="/Reinitialiser_mdp" exact component={Reinitialiser_mdp}/>
           </Switch>
      </BrowserRouter>
  );
}

export default App;
