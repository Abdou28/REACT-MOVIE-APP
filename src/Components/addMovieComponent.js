import React from 'react';
import styled from 'styled-components'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import addImage from '../res/add.jpg'

export default class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: "",
            director: "",
            image: "",
            rating: 1,
            year: new Date().getFullYear(),
            trailer: ""
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    valid = () => {
        this.toggle()
        this.props.addMovie(this.state.name, this.state.year, this.state.director, this.state.image, this.state.rating, this.state.trailer)
    }
    render() {
        return (

            <div className=" col-lg-3 col-md-4 col-sm-6 col-xs-12" align="center">
                <AddMovieStyle image={addImage} >
                    <figure className="movie" onClick={event => this.toggle()}>
                        <figcaption className="figcaption-movie">
                            <span className="name-film" >Ajouter Un film</span>
                        </figcaption>
                    </figure>
                </AddMovieStyle>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <AddMovieStyle>
                        <ModalHeader toggle={this.toggle} >Ajouter un film</ModalHeader>
                        <ModalBody>
                            <div className="data-movie">
                                <p className="subtitle">Titre</p>
                                <input placeholder="Titre" className="input-film" onChange={event => this.setState({ name: event.target.value })} />
                            </div>
                            <div className="data-movie">
                                <p className="subtitle">Réalisateur</p>
                                <input placeholder="Réalisateur" className="input-film" onChange={event => this.setState({ director: event.target.value })} />
                            </div>
                            <div className="data-movie">
                                <p className="subtitle">Image</p>
                                <input placeholder="URL de l'affiche" className="input-film" onChange={event => this.setState({ image: event.target.value })} />
                            </div>
                            <div className="data-movie">
                                <p className="subtitle">Video</p>
                                <input placeholder="URL bande d'annonce Youtube" className="input-film" onChange={event => this.setState({ trailer: event.target.value })} />
                            </div>
                            <div className="data-movie">
                                <p className="subtitle">Année</p>
                                <div className="operator">
                                    <Button className="operator-button" color="primary" onClick={event => this.state.year < new Date().getFullYear() ? this.setState({ year: this.state.year + 1 }) : this.state.year}>+</Button>
                                    {this.state.year}
                                    <Button className="operator-button" color="primary" onClick={event => this.state.year > 1900 ? this.setState({ year: this.state.year - 1 }) : this.state.year}>-</Button>
                                </div>
                            </div>
                            <div className="data-movie">
                                <p className="subtitle">Note</p>
                                <div className="operator">
                                    <Button className="operator-button" color="primary" onClick={event => this.state.rating < 5 ? this.setState({ rating: this.state.rating + 1 }) : this.state.rating}>+</Button>
                                    {this.state.rating}
                                    <Button className="operator-button" color="primary" onClick={event => this.state.rating > 1 ? this.setState({ rating: this.state.rating - 1 }) : this.state.rating}>-</Button>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.valid}>Confirmer</Button>
                            <Button color="secondary" onClick={this.toggle}>Annuler</Button>
                        </ModalFooter>
                    </AddMovieStyle>
                </Modal>
            </div>
        );
    }
}

const AddMovieStyle = styled.div`
.movie{
    background-image:url("${props => props.image}");
    background-repeat: no-repeat;
    background-size:contain;
    background-color:white;
    height: 300px;
    width:200px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    cursor:pointer;
}

.figcaption-movie{
    background: black;
    color: white;
    font-weight: 500;
    text-align: center;
    text-overflow: ellipsis;
    word-wrap: break-word;
}
.data-movie{
    display:flex;
    justify-content:space-between;
    margin: 10px 5px;

}
.subtitle{
    display:inline;
    color:red;
    font-size:15px;
}
.input-film{
    width:60%;
}
.operator{
    width:60%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:18px;
    font-weight:bold;
}
`