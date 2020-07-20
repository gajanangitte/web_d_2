import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
    
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );


    return (
        <h1> Hi </h1>
    )
}

ReactDOM.render( <App /> , document.getElementById('root'));