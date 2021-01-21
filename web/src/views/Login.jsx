import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Login.css';

const Login = props => (
    <div className="Login">
        <div className="wrapper fadeInDown">
            <div id="formContent">
                { /* Formulario Login */ }
                <form>
                    <h1>Login</h1>
                    <input type="text" id="login" class="fadeIn second" name="login" placeholder="Usuário" />
                    <input type="text" id="password" class="fadeIn third" name="login" placeholder="Senha" />
                    <input type="submit" class="fadeIn fourth" value="Log In" />
                </form>

                { /* Criar nova conta */ }
                <div id="formFooter">
                    <Link class="underlineHover" to="cadastro">Criar nova conta</Link>
                </div>
            </div>
        </div>
    </div>
);

export default Login