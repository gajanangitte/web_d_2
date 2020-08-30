import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'; 
import SteamCreate from './steams/SteamCreate';
import SteamList from './steams/SteamList';
import SteamDelete from './steams/SteamDelete';
import SteamShow from './steams/SteamShow';
import SteamEdit from './steams/SteamEdit';
import Header from './header';

const App = () => {
    return (
        <div className='ui container'>
            
           <BrowserRouter>
            <div>
                <Header />
                
                <Route path='/' exact component={SteamList} />
                <Route path='/steams/new' exact component={SteamCreate} />
                <Route path='/steams/edit' exact component={SteamEdit} />
                <Route path='/steams/delete' exact component={SteamDelete} />
                <Route path='/steams/show' exact component={SteamShow} />       
            </div>
           </BrowserRouter> 
        </div>
    )
}


export default App;