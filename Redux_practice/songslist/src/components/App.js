import React from 'react';
// import {selectSong} from '../actions';
import SongList from './SongList';
import SongDetail from './SongDetail';


export default function App() {
    return (
        <div className='ui container grid' style={{padding: '30px'}}>
            <div className='ui row'>
                <div className='column eight wide'>
                    <SongList />
                </div>
                <div className='column eight wide'>
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}
