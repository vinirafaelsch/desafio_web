import React from 'react';
import axios from 'axios';

import '../css/PessoasCadastradas.css'
import Footer from "../components/Footer";

class PessoasCadastradas extends React.Component {

    state = {
        users: []
    }

    // Assim que página é carregada, faz uma requisição para site externo.
    // Site possui uma lista de usuários
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(res.data)
                const users = res.data;
                this.setState({users});
            })
    }

    render() {
        return (
            <div className="PessoasCadastradas">
                <div className="content">
                    <br/>
                    <h1 className="font-weight-light text-center">Pessoas cadastradas</h1>
                    <hr/>
                    {/*Printa Pessoas Cadastradas*/}
                    {this.state.users.map((user) => (
                        <div className="row featurette" style={{marginTop: "30px"}}>
                            <div className="col-md-7">
                                <h2 className="featurette-heading">{ user.name }<span className="text-muted"> Rua: { user.address.street }, { user.address.suite }</span>
                                </h2>
                                <p className="lead">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    <br /><br />
                                    <strong>Telefone: { user.phone } </strong> <br />
                                    <strong>Email: { user.email } </strong>
                                </p>
                            </div>
                            <div className="col-md-5">
                                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto"
                                     alt="500x500" style={{width: "500px"}}
                                     src="https://imagens3.ne10.uol.com.br/blogsne10/social1/uploads/2020/09/mariahdemoraes.jpg"
                                     data-holder-rendered="true" />
                            </div>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        );
    }
}

export default PessoasCadastradas
