import React, { Component } from 'react'
import {connect} from 'react-redux';
import { fetchSteams } from '../../actions';

class SteamShow extends Component {
    
    componentDidMount() {
        this.props.fetchSteams(this.props.match.params.id)
    }
    
    render() {

        if(!this.props.steam) {
            return <>Loading ...</>
        }         

        let {title, description} = this.props.steam;

        return (
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { steam: state.steams[ownProps.match.params.id] }
}


export default connect(mapStateToProps, {
    fetchSteams,
})(SteamShow)