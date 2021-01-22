import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import PessoasCadastradas from '../views/PessoasCadastradas';
import Login from '../views/Login';
import Cadastro from "../views/Cadastro";

const Content = props => (
    <div className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/pessoas-cadastradas">
                <PessoasCadastradas />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/cadastro">
                <Cadastro />
            </Route>
        </Switch>
    </div>
);

export default Content