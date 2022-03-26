import React from 'react';
import './Movie.css'

const Movie = ({ movie, handleButton }) => {

    const { name, price, image } = movie || {};

    return (
        <div className='movie'>
            {/* <h2>Id: {id}</h2> */}
            <img className='img' src={image} alt="" />
            <h2>Name: {name} </h2>
            <p>Price: ${price}</p>
            <button onClick={() => handleButton(movie)} className='btn-cart'><p>Add to cart</p></button>


        </div>
    );
};

export default Movie;