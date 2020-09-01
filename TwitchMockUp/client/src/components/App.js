import React from 'react'
import {Router, Route} from 'react-router-dom'; 
import SteamCreate from './steams/SteamCreate';
import SteamList from './steams/SteamList';
import SteamDelete from './steams/SteamDelete';
import SteamShow from './steams/SteamShow';
import SteamEdit from './steams/SteamEdit';
import Header from './header';
import history from '../history'

const App = () => {
    return (
        <div className='ui container'>
            
           <Router history={history}>
            <div>
                <Header />
                
                <Route path='/' exact component={SteamList} />
                <Route path='/steams/new' exact component={SteamCreate} />
                <Route path='/steams/edit/:id' exact component={SteamEdit} />
                <Route path='/steams/delete/:id' exact component={SteamDelete} />
                <Route path='/steams/show' exact component={SteamShow} />       
            </div>
           </Router> 
        </div>
    )
}


export default App;