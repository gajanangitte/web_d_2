import React, {useState, useEffect} from 'react'
import Axios from 'axios';

export default function Search() {
    
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    
    

    useEffect(() => {
        
        const searchWiki = async () => {
           const {data} = await Axios.get('https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch='+term);
        
           if(term)
            setResults(data.query.search);
        }
        
        searchWiki();
        
        }, [term] );

    
    const renderResults =  results.map((result, index) => {

            return (
                <div className='item' key={index}>
                    <div className='content'>
                        <div className='header'>
                            {result.title}
                        </div>
                        {result.snippet}
                    </div>
                </div>
            )

        })
    

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input 
                        className='input' 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
                <div className='ui celled list'>
                    {renderResults}
                </div>
            </div>
        </div>
    )
}
