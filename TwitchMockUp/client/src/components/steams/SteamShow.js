import React, { Component } from 'react'
import flv from "flv.js";
import {connect} from 'react-redux';
import { fetchSteams } from '../../actions';

class SteamShow extends Component {
    
    constructor(props) {
        super(props)
    
         this.videoRef = React.createRef()   
    }
    

    componentDidMount() {

        let id  = this.props.match.params.id;

        this.props.fetchSteams(id);

        this.buildPlayer()
    }

    componentDidUpdate() {
        this.buildPlayer()
    }

    buildPlayer() {
        if(this.player || !this.props.steam) {
            return ; 
        }

        let id  = this.props.match.params.id;

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        })

        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
        this.player.play();
        
    }

    componentWillUnmount() {
        this.player.destroy()
    }
    
    render() {

        if(!this.props.steam) {
            return <>Loading ...</>
        }         

        let {title, description} = this.props.steam;

        return (
            <div>
                <video ref={this.videoRef} style={{width: '100%'}} controls />
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