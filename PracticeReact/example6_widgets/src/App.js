import React from 'react'
// import Accordion from './Accordion'
import Search from './Search'


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

export default function App() {
    return (
        <div>
            {/* <Accordion items={items} /> */}
            <Search />
        </div>
    )
}
