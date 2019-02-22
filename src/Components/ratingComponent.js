import React from "react"
import styled from 'styled-components'

let array = ["", "", "", "", ""]

export default class Rating extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stars: array.map((star, i) =>
                <svg key={i} height="25" width="23" className="star-rating" >
                    <polygon data-rating={i + 1} points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style={i + 1 <= this.props.rating ? { fill: "#ffd055" } : { fill: "#d8d8d8" }} onClick={event => this.starColoring(event.target)} />
                </svg>
            )
        }

    }

    starColoring(elt) {
        let rating = elt.getAttribute("data-rating")
        if (this.props.selected) {
            let arrayStars = Array.from(elt.parentElement.parentElement.querySelectorAll('polygon'))
            arrayStars.map((star, i) =>
                i < rating ? arrayStars[i].style.fill = "#ffd055" : arrayStars[i].style.fill = "#d8d8d8")
            this.props.sortChange("rating", rating);
        }

    }

    render() {
        return (
            <RatingStyle cursor={this.props.selected ? "pointer" : "auto"}>
                <div>
                    {this.state.stars}
                </div>
            </RatingStyle>
        )
    }

}

const RatingStyle = styled.div`
polygon {
    fill: #d8d8d8;
}
polygon:hover{
    fill: #ffd055;
    cursor: ${props => props.cursor};
}
`
