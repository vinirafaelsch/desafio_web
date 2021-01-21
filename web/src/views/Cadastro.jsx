import React from 'react';

import '../css/Cadastro.css';

const Cadastro = props => (
    <div className="Cadastro">
        <div className="wrapper fadeInDown">
            <div id="formContent">
                { /* Formulario Cadastro */}
                <form>
                    <h1>Criar nova conta</h1>
                    <input type="text" id="name" className="fadeIn second" name="name" placeholder="Nome"/>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="Usuário"/>
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="Senha"/>
                    <input type="submit" className="fadeIn fourth" value="Log In"/>
                </form>
            </div>
        </div>
    </div>
);

export default Cadastro