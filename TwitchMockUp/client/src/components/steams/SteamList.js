import React from 'react'
import {connect} from 'react-redux';
import { fetchSteams } from '../../actions';
import { Link } from 'react-router-dom';


class StreamList extends React.Component {
    
    componentDidMount() {
        this.props.fetchSteams();
    }

    renderAdmin(steam) {
        if (steam.userId === this.props.currentUserId) {
           return (
               <div className='ui right floated content'>
               <Link to={`/steams/edit/${steam.id}`} className='ui primary  button'>Edit</Link>
               <Link to={`/steams/delete/${steam.id}`} className='ui negative button'>Delete</Link>   
                </div>
            )
        }
    }

    renderList = () => {
        return this.props.steams.map(steam => {
            return (
                <div className='item' key={steam.id}>
                    {this.renderAdmin(steam)}
                    
                    <i className='large middle aligned icon video' />
                    <div className='content'>
                        <Link to={`/steams/${steam.id}`}>
                        {steam.title}
                        </Link>
                        <div className='description' >
                            {steam.description}
                        </div>
                    </div>
                </div> 
            )
        })
    }

    renderCreate() {

        if(this.props.isSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to='/steams/new' className='ui button yellow' style={{color: 'black'}}>
                        Create Steam
                    </Link>
                </div>
            )
        }
    }

    render() {
    return (
        <div>
            <h2>Steams</h2>
            <div className='ui celled list'>
                {this.renderList()}
            </div>
            {this.renderCreate()}
        </div>
    )
    }
}

const mapStateToProps = (state) => {

    return { 
        steams: Object.values(state.steams) ,
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
    }
}

export default connect(mapStateToProps, {
    fetchSteams,
})(StreamList)
