import React from 'react';

import '../css/Cadastro.css';

const Cadastro = props => (
    <div className="Cadastro">
        <div className="wrapper fadeInDown">
            <div id="formContent">
                { /* Formulario Cadastro */}
                <form>
                    <h1>Criar nova conta</h1>
                    <input type="text" id="nome" className="fadeIn second" name="name" placeholder="Nome"/>
                    <input type="text" id="email" className="fadeIn second" name="email" placeholder="Email"/>
                    <input type="text" id="usuario" className="fadeIn second" name="login" placeholder="Usuário"/>
                    <input type="text" id="senha" className="fadeIn third" name="login" placeholder="Senha"/>
                    <input type="submit" className="fadeIn fourth" value="Criar conta"/>
                </form>
            </div>
        </div>
    </div>

);

export default Cadastro