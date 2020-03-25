import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Login from '../pages/main/login';
import Cadastro from '../pages/main/CadastroUsuario';
import Main from '../pages/main/modelo2';
export default function Router(){
    return (
        <BrowserRouter>
        <Switch>
             <Route exact path="/Authenticate" component={Main} />
             <Route exact path="/Cadastro" component={Cadastro} />
             <Route exact path="/" component={Login} />
        </Switch>
 </BrowserRouter>
    );
}