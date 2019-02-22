import React from 'react'
import Movie from './Components/movieComponent'
import AddMovie from './Components/addMovieComponent'
import styled from 'styled-components'
import { moviesList } from './res/data'


export default class MovieList extends React.Component {
    constructor(props) {
        super()
        this.state = {
            allMovies: moviesList.map((movie, i) =>
                <Movie key={i} movie={movie} />)
        }
    }

    addMovie = (name, year, director, image, rating, trailer) => {
        this.setState({
            allMovies: this.state.allMovies
                .concat(<Movie key={this.state.allMovies.length} movie={{ name, year, director, image, rating, trailer }} />)
        })
        moviesList.push({ name, year, director, image, rating, trailer })
    }

    selectSort = (order) => {
        switch (order) {
            case "Alphabetical": this.setState({
                allMovies: this.state.allMovies.sort((a, b) => a.props.movie.name.toLowerCase() < b.props.movie.name.toLowerCase() ? -1 : a.props.movie.name.toLowerCase() > b.props.movie.name.toLowerCase() ? 1 : 0)
            })
                break;
            case "Year": this.setState({
                allMovies: this.state.allMovies.sort((a, b) => a.props.movie.year - b.props.movie.year).reverse()
            })
                break;
            case "Votes": this.setState({
                allMovies: this.state.allMovies.sort((a, b) => a.props.movie.rating - b.props.movie.rating).reverse()
            })
                break;
            default: this.setState({
                allMovies: this.state.allMovies.sort((a, b) => a.key - b.key)
            })
                break;
        }
    }

    componentWillReceiveProps(prevProps) {
        if (prevProps.sort !== this.props.sort) {
            this.setState({
                allMovies: moviesList.map((movie, i) =>
                    <Movie key={i + 1000} movie={movie} />)
            })

        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.sort !== this.props.sort) {
            switch (this.props.sort.type) {
                case "select": this.selectSort(this.props.sort.value)
                    break;
                case "search": this.setState({
                    allMovies: this.state.allMovies.filter(x => x.props.movie.name.toLowerCase().indexOf(this.props.sort.value) !== -1)
                })
                    break;
                default: this.setState({
                    allMovies: this.state.allMovies.filter(x => x.props.movie.rating === Number(this.props.sort.value))
                })
                    break;
            }
        }
    }

    render() {
        return (
            <MovieListStyle>
                <div className="display-movies">{this.state.allMovies.concat(<AddMovie key={this.state.allMovies.length} addMovie={this.addMovie} />)}</div>
            </MovieListStyle>
        )
    }
}

const MovieListStyle = styled.div`
.display-movies{
    display:flex;
    flex-wrap:wrap;
}
`