import React from 'react'
import {connect} from 'react-redux';
import { fetchSteams } from '../../actions';


class StreamList extends React.Component {
    
    componentDidMount() {
        this.props.fetchSteams();
    }

    renderList = () => {
        return this.props.steams.map(steam => {
            return (
                <div className='item' key={steam.id}>
                    <i className='large middle aligned icon camera' />
                    <div className='content'>
                        {steam.title}
                        <div className='description' >
                            {steam.description}
                        </div>
                    </div>
                </div> 
            )
        })
    }

    render() {
        console.log(this.props.steams)
    return (
        <div>
            <h2>Steams</h2>
            <div className='ui celled list'>
                {this.renderList()}
            </div>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return { steams: Object.values(state.steams)  }
}

export default connect(mapStateToProps, {
    fetchSteams,
})(StreamList)
