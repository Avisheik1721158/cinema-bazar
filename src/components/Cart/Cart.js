import React from 'react';
import './Cart.css'

const Cart = ({ cart, clearButton, chooseOne }) => {
    // let newMovie = [];
    // for (const carts of cart) {
    //     newMovie = newMovie + carts.name;
    //     // console.log(newMovie)
    // }

    // console.log(cart[3].name)



    return (
        <div className='cart'>
            <h4>Selected Movie</h4>
            <div>
                {
                    cart.map((carts) => {
                        if (cart.length > 4) {
                            alert('Please select 4 movies')

                        }

                        return (

                            <p className='cart-text'>
                                {/* key={carts.id} */}
                                {
                                    carts.name


                                }
                                <div>
                                    <p>
                                        {
                                            carts.price
                                        }
                                    </p>
                                </div>




                            </p>

                        )


                    })
                }


                <button onClick={() => chooseOne(cart)} className='btn-selected'>Choose one for me </button>


                <button onClick={() => clearButton(cart)} className='btn-selected-again'>Choose Again </button>




            </div>

        </div>
    );
};

export default Cart;