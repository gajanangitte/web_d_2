import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {fetchSteam, editSteam} from '../../actions'
import StreamForm from './StreamForm';


class StreamEdit extends React.Component{
    
    componentDidMount() {
        this.props.fetchSteam(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        // console.log(formValues)
        this.props.editSteam(this.props.match.params.id, formValues);
    }

    render() {
        if(!this.props.steam) {
            return <>Loading ...</>
        }

        return (
            <div>
                <h3>Edit this Steam</h3>
                <StreamForm 
                    onSubmit={this.onSubmit} 
                    initialValues={_.pick(this.props.steam, 'title', 'description')}
                />
            </div> 
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { steam: state.steams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchSteam, editSteam })(StreamEdit);