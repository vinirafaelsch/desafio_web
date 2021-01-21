import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import CompraPlano from '../views/CompraPlano';
import Login from '../views/Login';
import Cadastro from "../views/Cadastro";

const Content = props => (
    <div className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/compra-plano">
                <CompraPlano />
            </Route>
            <Route path="/Login">
                <Login />
            </Route>
            <Route path="/cadastro">
                <Cadastro />
            </Route>
        </Switch>
    </div>
);

export default Content