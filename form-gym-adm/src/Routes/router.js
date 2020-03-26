import React from 'react';
import {Switch,Route} from 'react-router-dom';

import formCadExercicio from '../pages/formCadastroExercicio/index';
import ContaUser from '../pages/ContaUser';
import FormFicha from '../pages/FormFicha';
import Objetivo from '../pages/Objetivos';
import perfil from '../pages/main/perfil';
export default function Router(){
    return (
 
        <Switch>
            <Route exact path="/" component={perfil} />
            <Route exact path="/Conta" component={ContaUser} />
            <Route exact path="/Exercicios" component={formCadExercicio} />
            <Route exact path="/FormFicha" component={FormFicha} />
              <Route exact path="/Objetivo" component={Objetivo} />
        </Switch>
 
    );
}