import React from 'react'
import styled from 'styled-components'

export default class Sort extends React.Component {
    render() {
        return (
            <SortStyle>
                <select className="select-sort" onChange={event => this.props.sortChange("select", event.target.value)}>
                    <option value="Default">Défaut</option>
                    <option value="Alphabetical">Alphabétique</option>
                    <option value="Year">Année</option>
                    <option value="Votes">Votes</option>
                </select>
            </SortStyle>
        )
    }
}

const SortStyle = styled.div`
.select-sort{
    height:30px;
    width:200px;
}
`