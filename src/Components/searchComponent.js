import React from 'react'
import styled from 'styled-components'

export default class SearchBar extends React.Component {
    render() {
        return (
            <SearchStyle>
                <div className="search-bar">
                    <input className="search-input" placeholder="Type movie name to search" onChange={event => this.props.sortChange("search", event.target.value.toLowerCase().trim())} />
                </div>
            </SearchStyle>
        )
    }
}

const SearchStyle = styled.div`
.search-input{
    width:250px;
}
`