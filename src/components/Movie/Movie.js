import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Movie.css'

const Movie = ({ movie, handleButton }) => {

    const { name, price, image } = movie || {};

    return (
        <div className='movie'>
            {/* <h2>Id: {id}</h2> */}
            <img className='img' src={image} alt="" />
            <h3>Name: {name} </h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleButton(movie)} className='btn-cart'><p className='btn-text'>Add to cart</p> <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
            <ToastContainer />

        </div>
    );
};

export default Movie;