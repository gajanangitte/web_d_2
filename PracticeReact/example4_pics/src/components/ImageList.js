import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard'
export default class ImageList extends React.Component {

    render() {
        const images = this.props.images.map((img) => {
            return <ImageCard image={img} key={img.id} />
        });
        return (
            <div className='image-list'>
                {images}
            </div>
        );
    }
}