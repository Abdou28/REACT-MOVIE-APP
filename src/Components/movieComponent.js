import React from 'react'
import Rating from './ratingComponent'
import ModalInfo from './modalInfoComponent'
import styled from 'styled-components'

export default class Movie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            displayModalInfo: false
        }
    }

    displayModal = value => {
        this.setState({ displayModalInfo: value })
        
    }

    render() {
        return (
            <div className=" col-lg-3 col-md-4 col-sm-6 col-xs-12" align="center">
                <MovieStyle image={this.props.movie.image}>
                    <figure className=" movie" onClick={event => this.displayModal(true)}>
                        <Rating rating={this.props.movie.rating} selected={false} />
                        <figcaption className="figcaption-movie">
                            <span className="name-film">{this.props.movie.name}</span>-
                        <span className="year-film">{this.props.movie.year}</span>
                        </figcaption>
                    </figure>
                    <ModalInfo display={this.state.displayModalInfo} displayModal={this.displayModal} movie={this.props.movie} />
                </MovieStyle>
            </div>
        )
    }
}

const MovieStyle = styled.div`
.movie{
    background-image:url("${props => props.image}");
    background-repeat: no-repeat;
    background-size:cover;
    background-color:white;
    height: 300px;
    width:200px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}

.figcaption-movie{
    background: black;
    color: white;
    font-weight: 500;
    text-align: center;
    text-overflow: ellipsis;
    word-wrap: break-word;
}

`