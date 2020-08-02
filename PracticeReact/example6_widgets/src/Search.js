import React, {useState, useEffect} from 'react'
import Axios from 'axios';

export default function Search() {
    
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);
    
    useEffect( () => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 500);

        return(() => {
            clearTimeout(timerId);
        })
    }, [term] );

    useEffect(() => {
        
        const searchWiki = async () => {
            const {data} = await Axios.get('https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srlimit=15&origin=*&srsearch='+debouncedTerm);
         
            if(debouncedTerm)
             setResults(data.query.search);
         }
 
         searchWiki();

    }, [debouncedTerm])

    
    const renderResults =  results.map((result, index) => {

            return (
                <div className='item' key={index}>
                    <div className='right floated content'>
                        <a href={`http://en.wikipedia.org?curid=${result.pageid}`} className='ui button'>
                            Go
                        </a>
                    </div>
                    <div className='content'>
                        <div className='header'>
                            {result.title}
                        </div>
                        <span dangerouslySetInnerHTML={{__html: result.snippet}}> 
                        </span>
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
