import React, { Component } from 'react';
import MovieList from './movieList'
import Search from './Components/searchComponent'
import Sort from './Components/sortComponent'
import Rating from './Components/ratingComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import "./style.css";

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      type: "",
      value: ""
    }
    this.sortChange = this.sortChange.bind(this)
  }

  sortChange(type, value) {
    this.setState({
      type,
      value
    })
  }

  render() {
    return (
      <AppStyle>
        <div className="app">
          <h1 className='title'>ABDOUFLIX</h1>
          <div className='options'>
            <div>
              <p className="option-text">Trier par</p>
              <Sort sortChange={this.sortChange} />
            </div>
            <div>
              <p className="option-text">Recherche</p>
              <Search sortChange={this.sortChange} />
            </div>
            <div>
              <p className="option-text">Note minimum</p>
              <Rating selected={true} sortChange={this.sortChange} />
            </div>
          </div>
          <div className='movies'>
            <MovieList sort={this.state} />
          </div>
        </div>
      </AppStyle>
    );
  }
}

const AppStyle = styled.div`
*{
  font-family:Verdana, Geneva, sans-serif;
  box-sizing:border-box;
}
.app{
  background-color:#73CFF8;
  padding: 0 5%;
}
.title{
  font-size:60px;
  font-weight: bold;
  text-align:center;
  letter-spacing: 8px;
  font-family:"Comic Sans MS", cursive, sans-serif;
  align-text:center;
  -webkit-animation: color-change 5s infinite;
  -moz-animation: color-change 5s infinite;
  -o-animation: color-change 5s infinite;
  -ms-animation: color-change 5s infinite;
  animation: color-change 5s infinite;
}
.options{
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
  margin: 30px;
}
.option-text{
  text-align:center;
  margin:0;
}

@media (max-width: 600px) {
  .title {
    letter-spacing: 0px;
    font-size:40px;
  }
  }

@-webkit-keyframes color-change {
  0%  { color: red ; }
  20% { color:orange ;}
  40% { color:blue ;}
  80% { color:orange ; }
  100% { color: red ; }
}
@-moz-keyframes color-change {
  0%  { color: red ; }
  20% { color:orange ;}
  40% { color:blue ;}
  80% { color:orange ; }
  100% { color: red ; }
}
@-ms-keyframes color-change {
  0%  { color: red ; }
  20% { color:orange ;}
  40% { color:blue ;}
  80% { color:orange ; }
  100% { color: red ; }
}
@-o-keyframes color-change {
  0%  { color: red ; }
  20% { color:orange ;}
  40% { color:blue ;}
  80% { color:orange ; }
  100% { color: red ; }
}
@keyframes color-change {
  0%  { color: red ; }
  20% { color:orange ;}
  40% { color:blue ;}
  80% { color:orange ; }
  100% { color: red ; }
}
`


