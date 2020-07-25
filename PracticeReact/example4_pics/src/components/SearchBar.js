import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);    
        this.state= {
                value: '',
            }
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event) {
        // console.log(event.target.value);
        this.setState({value: event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(this.state.value);
    }
    
    render() {
        return (
        <div className='ui segment'>
            <form onSubmit={this.onFormSubmit} className='ui form'>
                <div className='field'>
                
                    <label> Search Image</label>
                    <input 
                        type='text' 
                        onChange={this.onInputChange.bind(this)} 
                        value={this.state.value}
                    />     
                </div>
            </form>
        </div>
        )
    }
}