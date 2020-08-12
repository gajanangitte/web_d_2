import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        // console.log(this.props);
        if(!this.props.song)
        return <h4>Select A Song</h4>
        
        return (
            <div>
                <h3>Details For:</h3>
                <p>
                    Title: {this.props.song.title}
                    <br/>
                    Duration: {this.props.song.duration}
                </p>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return { 
        song: state.selectedSong
    }
}

export default connect(mapStatetoProps, {

})(SongDetail);