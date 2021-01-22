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
                    <input type="text" id="usuario" className="fadeIn second" name="login" placeholder="Usuário" />
                    <input type="text" id="senha" className="fadeIn third" name="login" placeholder="Senha" />
                    <input type="submit" className="fadeIn fourth" value="Entrar" />
                </form>

                { /* Criar nova conta */ }
                <div id="formFooter">
                    <Link className="underlineHover" to="cadastro">Criar nova conta</Link>
                </div>
            </div>
        </div>
    </div>
);

export default Login