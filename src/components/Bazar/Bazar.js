import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import './Bazar.css'


const Bazar = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setMovies(data))

    }, [])
    // const movies = [
    //     {
    //         "id": "623e0e451963492f2a867588",
    //         "image": "http://placehold.it/32x32",
    //         "price": 39,
    //         "name": "Lorraine Whitaker"
    //     },
    //     {
    //         "id": "623e0e457222c4786a9ea700",
    //         "image": "http://placehold.it/32x32",
    //         "price": 33,
    //         "name": "Rebekah Pratt"
    //     },
    //     {
    //         "id": "623e0e45db86c779f35b32b4",
    //         "image": "http://placehold.it/32x32",
    //         "price": 25,
    //         "name": "Leon Sharp"
    //     },
    //     {
    //         "id": "623e0e458dcf5e2f4349ad49",
    //         "image": "http://placehold.it/32x32",
    //         "price": 22,
    //         "name": "Payne Caldwell"
    //     },
    //     {
    //         "id": "623e0e451564312cd8d9e3ae",
    //         "image": "http://placehold.it/32x32",
    //         "price": 23,
    //         "name": "Ashley Walls"
    //     }
    // ]


    return (
        <div className='ui-container'>
            <div className='movies-container'>

                {
                    movies.map(movie => <Movie
                        key={movie.id}
                        movie={movie}>
                    </Movie>)
                }

            </div>
            <div className='cart-container'>
                <h4>Order Summary</h4>
            </div>
        </div>
    );
};

export default Bazar;