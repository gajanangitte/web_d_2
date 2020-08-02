import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import Accordion from './Accordion';
import Search from './Search';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite javascript framework library amongst Enginners'
    },
    {
        title: 'How do you use React?',
        content: 'React framework works by creating smaller components and by their interaction'
    },
]

const options = [
    {
        label: 'The Royality of Red' ,
        value: 'red'
    },
    {
        label: 'The Gust of Green' ,
        value: 'green'
    },
    {
        label: 'The Shade of Blue' ,
        value: 'blue'
    },
]

const showAccordion = () => {
    if(window.location.pathname === '/') {
        return <Accordion items={items} />
    }
}

const showList = () => {
    if(window.location.pathname === '/list') {
        return <Search />
    }
}

const showDropdown = () => {
    if(window.location.pathname === '/dropdown') {
        return <Dropdown />
    }
}

const showTranslate = () => {
    if(window.location.pathname === '/translate') {
        return <Translate />
    }
}

export default function App() {

    const [selected, setSelected] = useState(options[0]);
    
    return (
        <div>
            <div className='ui container' style={{ margin: '10px'}}>

                <Header  /> 

                <Route path='/'>
                    <Accordion items={items} />
                </Route>

                <Route path='/translate'>
                    <Translate />
                </Route>

                <Route path='/dropdown'>
                    <Dropdown 
                        selected={selected}
                        label='Select a Color'
                        onSelectedChange={setSelected}
                        options={options}    
                    />
                </Route>

                <Route path='/list'>
                    <Search />
                </Route>
                
            </div>
        </div>
    )
}
