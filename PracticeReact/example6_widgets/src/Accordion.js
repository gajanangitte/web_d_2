import React, {useState} from 'react'

export default function Accordion({items}) {
    
    const [activeIndex, setActiveIndex] = useState(null);


    let onTitleClick = (index) => {
        // console.log('Title Clicked', index);
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {
        
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div 
                 className={`title ${active}`}
                  onClick={ () => onTitleClick(index) }
                >
                    <i className='dropdown icon'></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    {item.content}
                </div>
            </React.Fragment>
        )
    })
    
    return (
        <div className='ui styled accordion'>
            {renderedItems}
            {/* <h1> {activeIndex} </h1> */}
        </div>
    )
}
