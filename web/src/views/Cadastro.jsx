import React from 'react';

import '../css/Cadastro.css';
import axios from "axios";

class Cadastro extends React.Component {

    state = {
        nome: '',
        email: '',
        usuario: '',
        senha: ''
    }

    // Atualiza valores das variáveis conforme alteração nos campos
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // Envia requisição para armazenar dados em banco de dados
    handleSubmit = event => {
        event.preventDefault();

        // Prepara objeto que será armazenado
        const user = {
            nome: this.state.nome,
            email: this.state.email,
            usuario: this.state.usuario,
            senha: this.state.senha
        };

        // Envia requisição
        axios.post(`http://localhost:8000/insert_people`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        alert('Usuário criado com sucesso!');
    }


    render() {
        return (
            <div className="Cadastro">
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        { /* Formulario Cadastro */}
                        <form onSubmit={this.handleSubmit}>
                            <h1>Criar nova conta</h1>
                            <input type="text" id="nome" className="fadeIn second" onChange={this.handleChange} name="nome" placeholder="Nome"/>
                            <input type="text" id="email" className="fadeIn second" onChange={this.handleChange} name="email" placeholder="Email"/>
                            <input type="text" id="usuario" className="fadeIn second" onChange={this.handleChange} name="usuario"
                                   placeholder="Usuário"/>
                            <input type="text" id="senha" className="fadeIn third" onChange={this.handleChange} name="senha" placeholder="Senha"/>
                            <input type="submit" className="fadeIn fourth" value="Criar conta"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cadastro