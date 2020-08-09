import React, {useState, useEffect} from 'react'

 const SearchBar = ({onSubmit, defaultSearchTerm}) =>  {
    
    const [value, setValue] = useState(defaultSearchTerm);
    
    const onFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(value);
    }


    return (
        <div className='search-bar ui segment'>
            <form onSubmit={onFormSubmit} className='ui form'>
                <div className='field'>
                
                    <label> Search Video</label>
                    <input 
                        type='text' 
                        onChange={(e) => setValue(e.target.value)} 
                        value={value}
                    />     
                </div>
            </form>
        </div>
        )
}
export default SearchBar;