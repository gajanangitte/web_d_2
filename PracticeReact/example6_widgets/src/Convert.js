import React, {useState, useEffect} from 'react';
import axios from 'axios';



const Convert = ({language, text}) => {
    
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text)

    
    useEffect(() => {
        const timerId = setTimeout( () => {
            setDebouncedText(text);
        }, 500 );

        return () => {
            clearTimeout(timerId);
        }

    }, [text])
    
    
    useEffect(() => {
        
        const doTranslate = async () =>  {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {

                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                }
            }
            )
         
        
        // console.log('mnew lang or text')
        setTranslated(data.data.translations[0].translatedText);
        }

        doTranslate();
        
    }, [debouncedText, language])
    
    return (
        <div>
            <h2 className='ui header'> {translated} </h2> 
        </div>
    )
};

export default Convert;