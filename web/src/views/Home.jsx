import React from 'react';
import axios from 'axios';

import '../css/Home.css'
import Footer from "../components/Footer";

class Home extends React.Component {

    render() {
        return (
            <div className="Home">
                {/*Carroussel*/}
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://placeimg.com/1080/500/nature"
                                 alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Primeira imagem</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://placeimg.com/1080/500/animals"
                                 alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Segunda imagem</h5>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://placeimg.com/1080/500/arch" alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Terceira imagem</h5>
                                <p>Excepteur sint occaecat cupidatat non proident</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                {/*Fim Carroussel*/}
                <div className="content">
                    <br/>
                    <h1 className="font-weight-light text-center">Notícias</h1>
                    <hr/>
                    {/*Notícias*/}
                    <div className="row">
                        <div className="card">
                            <img className="card-img-top"
                                 src="https://s4.static.brasilescola.uol.com.br/img/2013/08/sao-paulo(1).jpg"
                                 alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Primeira notícia</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Ler mais</a>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top"
                                 src="https://s4.static.brasilescola.uol.com.br/img/2013/08/rio-de-janeiro.jpg"
                                 alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Segunda notícia</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Ler mais</a>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top"
                                 src="https://s3.static.brasilescola.uol.com.br/img/2013/08/manaus(1).jpg"
                                 alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Outro card</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Ler mais</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card">
                            <img className="card-img-top"
                                 src="https://s4.static.brasilescola.uol.com.br/img/2013/08/rio-de-janeiro.jpg"
                                 alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card dois</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Ler mais</a>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top"
                                 src="https://s3.static.brasilescola.uol.com.br/img/2013/08/manaus(1).jpg"
                                 alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Terceiro card</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Ler mais</a>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top"
                                 src="https://s3.static.brasilescola.uol.com.br/img/2013/08/recife.jpg"
                                 alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Quarta notícia</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Ler mais</a>
                            </div>
                        </div>
                    </div>
                    {/*Fim notícias*/}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home