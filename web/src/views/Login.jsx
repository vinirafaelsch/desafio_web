import React from 'react';
import {Link} from 'react-router-dom';

import '../css/Login.css';
import axios from "axios";

class Login extends React.Component {
    state = {
        peoples: [],
        usuario: '',
        senha: ''
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/usuario`)
            .then(res => {
                console.log(res.data)
                const peoples = res.data;
                this.setState({peoples});
            })
    }

    // Atualiza valores das variáveis conforme alteração nos campos
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // Função que envia requisição para armazenar dado no bd
    handleSubmit(event) {
        event.preventDefault();

        axios.get(`http://localhost:8000/usuario`)
            .then(res => {
                console.log(res.data)
                const peoples = res.data;
                this.setState({peoples});
            })

        let comp = false;
        this.state.peoples.forEach(people => {
            if ((people.usuario == this.state.usuario) && people.senha == this.state.senha)
                comp = true;
        })

        if (comp)
            alert('Bem vindo!')
        else
            alert('Usuário não encontrado!')

    }

    render() {
        return (
            <div className="Login">
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        { /* Formulario Login */}
                        <form onSubmit={this.handleSubmit}>
                            <h1>Login</h1>
                            <input type="text" id="usuario" onChange={this.handleChange} className="fadeIn second"
                                   name="usuario"
                                   placeholder="Usuário"/>
                            <input type="text" id="senha" onChange={this.handleChange} className="fadeIn third"
                                   name="senha" placeholder="Senha"/>
                            <input type="submit" className="fadeIn fourth" value="Entrar"/>
                        </form>

                        { /* Criar nova conta */}
                        <div id="formFooter">
                            <Link className="underlineHover" to="cadastro">Criar nova conta</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login