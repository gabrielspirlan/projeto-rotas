import React from 'react'


import Fatec from '../FATEC/Fatec'
import Menu_Principal from '../Menu_Principal/Menu_Principal';
import Inicio from '../Inicio/Inicio'
//import { Link } from 'react-router-dom'
import { Route, Switch} from 'react-router'
import Noturno from '../Noturno/Noturno';
import ADS from '../ADS/ADS';
import Ufscar from '../UFSCAR/Ufscar'
import Unifran from '../Unifran/Unifran'
import Usp from '../Usp/Usp'
import Fafibe from '../Fafibe/Fafibe'

function App() {
  return (
    <div>
 
      
      
      <main>
        <Switch>
          <Route exact path = "/" render = {(props) => <Inicio/>}></Route>
          <Route exact path = "/fatec" render = {(props) => <Fatec/>}></Route>
          <Route exact path = "/noturno" render = {(props) => <Noturno/>}></Route>
          <Route exact path = "/ads" render = {(props) => <ADS/>}></Route>
          <Route exact path = "/ufscar" render = {(props) => <Ufscar/>}></Route>
          <Route exact path = "/unifran" render = {(props) => <Unifran/>}></Route>
          <Route exact path = "/usp" render = {(props) => <Usp/>}></Route>
          <Route exact path = "/fafibe" render = {(props) => <Fafibe/>}></Route>
        </Switch>

      </main>
      
    </div>
  );
}

export default App;

