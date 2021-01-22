import React from 'react';
import axios from 'axios';

import '../css/PessoasCadastradas.css'
import Footer from "../components/Footer";

class PessoasCadastradas extends React.Component {
    // Criação de vetor para armazenar usuários cadastrados
    state = {
        users: []
    }

    // Executa função quando página é carregada
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
                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">asdfads<span className="text-muted">It'll blow your mind.</span>
                            </h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                                porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5">
                            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto"
                                 alt="500x500" style={{width: "500px"}}
                                 src="https://imagens3.ne10.uol.com.br/blogsne10/social1/uploads/2020/09/mariahdemoraes.jpg"
                                 data-holder-rendered="true" />
                        </div>
                    </div>
                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span>
                            </h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                                porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl
                                consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto"
                                 alt="500x500"
                                 src="https://ibac.com.br/wp-content/uploads/2017/05/Andr%C3%A9-Farias-Pessoa-500x500.jpg"
                                 data-holder-rendered="true" style={{width: "500px"}} />
                        </div>
                    </div>
                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span>
                            </h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                                porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5">
                            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto"
                                 alt="500x500" style={{width: "500px"}}
                                 src="https://marcuspessoa.com.br/wp-content/uploads/2019/06/Marcus-Pessoa-Cidades-Criativas-1.jpg"
                                 data-holder-rendered="true" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default PessoasCadastradas
