import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Modal from '../Modal'
import history from '../../history'
import {fetchSteam, deleteSteam} from '../../actions'

class StreamDelete extends React.Component {
    
    componentDidMount() {
        this.props.fetchSteam(this.props.match.params.id);
    }

    renderActions() {
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteSteam(this.props.match.params.id)} className='ui negative button'>Delete</button>
                <Link to='/' className='ui green button'>Cancel</Link>
                            
            </React.Fragment>
        )
    }
    
    renderContent() {
        if (!this.props.steam) {
            return "Are you sure you want to delete this steam"
        }
        return `Are you sure you want to delete this steam with title: ${this.props.steam.title}`
    }

    render() {
        return (
            <div>
                <Modal 
                    title="DELETE STREAM"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        steam: state.steams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
   fetchSteam ,
   deleteSteam
})(StreamDelete);
