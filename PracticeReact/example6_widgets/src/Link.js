import React from 'react'

export default function Link({className, href, children}) {
    
    const onCLick = (e) => {
        if(e.metaKey || e.ctrlKey) {
            return ;
        }


        e.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    
    return (
        <a onCLick={onCLick} className={className} href={href}>
            {children}
        </a>
    )
}
