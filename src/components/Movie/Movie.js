import React from 'react';
import './Movie.css'

const Movie = (props) => {
    const { id, name, price, image } = props.movie || {};
    return (
        <div>
            {/* <h2>Id: {id}</h2> */}
            <img className='img' src={image} alt="" />
            <h2>Name: {name} </h2>
            <p>Price: ${price}</p>


        </div>
    );
};

export default Movie;