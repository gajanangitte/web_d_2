import unsplash from '../api/unsplash';
import React from 'react';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {
    
    state = {
        images: [],

    }

     onSearchSubmit = async (term) =>  {
        
       let response = await unsplash.get( 'search/photos/', {   
            params: {query: term,
                     per_page: 100},
        });
        //  console.log(response.data.results);
        this.setState({images: response.data.results});

    }
    
    render() {
            return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
              
                <ImageList images={this.state.images} />
              </div>
        );  
    }

}
export default App;
