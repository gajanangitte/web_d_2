import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createSteam} from '../../actions'
import StreamForm from './StreamForm';

class StreamCreate extends Component {

    onSumbit = (formValues) => {
    this.props.createSteam(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSumbit}/>
            </div>
            
        )
    }
}


export default connect(null, {createSteam})(StreamCreate)