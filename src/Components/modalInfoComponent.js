import React from 'react';
import styled from 'styled-components'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: this.props.display,
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
        this.props.displayModal(false)
    }

    urlExist(url) {
        /*var req= new XMLHttpRequest(); 
        try {
            req.open("HEAD", url, false);
            req.send(null);		
            return req.status === 200 ? true : false;
        }
        catch (er) {
            return false;
        }*/
        return url.startsWith("https://www.youtube.com/embed/")
    }

    render() {
        return (

            <div>
                <Modal isOpen={this.props.display} toggle={this.toggle} className={this.props.className}>
                    <ModalInfoStyle>
                        <ModalHeader toggle={this.toggle}>{this.props.movie.name}</ModalHeader>
                        <ModalBody>
                            <div className="data-row">
                                <p className="subtitle">Film : </p>
                                <p className="data">{this.props.movie.name}</p>
                            </div>
                            <div className="data-row">
                                <p className="subtitle">Réalisé par : </p>
                                <p className="data">{this.props.movie.director}</p>
                            </div>
                            <div className="data-row">
                                <p className="subtitle">Note : </p>
                                <p className="data">{this.props.movie.rating}</p>
                            </div>
                            <div className="data-row">
                                <p className="subtitle">Bande d'annonce : </p>
                                <iframe title={this.props.movie.name} width="560" height="315" src={this.urlExist(this.props.movie.trailer) ? this.props.movie.trailer : ""} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggle}>Fermer</Button>
                        </ModalFooter>
                    </ModalInfoStyle>
                </Modal>
            </div>

        );
    }
}

const ModalInfoStyle = styled.div`
.subtitle{
    display:inline;
    color:blue;
    width:35%;
}
.data{
    width:50%;
}
.data-row{
    display:flex; 
}
`