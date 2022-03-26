import React from 'react';

const Cart = ({ cart }) => {


    return (
        <div>
            <h4>Selected Movie</h4>
            <p>{cart.length}</p>
        </div>
    );
};

export default Cart;