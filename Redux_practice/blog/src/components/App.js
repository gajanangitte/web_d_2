import React, { Component } from 'react'
import PostList from './PostList'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className='ui container'>
                <PostList />
            </div>
        )
    }
}
