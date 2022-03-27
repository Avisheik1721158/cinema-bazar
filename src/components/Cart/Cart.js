import React from 'react';
import './Cart.css'

const Cart = ({ cart, clearButton, chooseOne, randomChoose }) => {
    // let newMovie = [];
    // for (const carts of cart) {
    //     newMovie = newMovie + carts.name;
    //     // console.log(newMovie)
    // }

    // console.log(cart.length)



    return (
        <div className='cart'>
            <h4>Selected Movie</h4>
            <div>
                {
                    cart.map((carts) => {
                        // if (cart.length > 4) {
                        //     alert('Please select 4 movies')
                        //  
                        // } 


                        return (

                            <div className='cart-text' key={carts.id}>
                                {/* key={carts.id} */}
                                {carts.name} {' '}
                                <p>
                                    price:$ {carts.price}
                                </p>
                            </div>

                        )

                    })


                }
                <div>
                    {
                        chooseOne.map((items) => {

                            return (

                                <div className='cart-text' key={items.id}>
                                    {/* key={carts.id} */}
                                    {items.name} {' '}
                                    <p>
                                        price:$ {items.price}
                                    </p>
                                </div>

                            )

                        })
                    }
                </div>



                <button onClick={() => randomChoose(chooseOne)} className='btn-selected'>Choose one for me </button>


                <button onClick={() => clearButton(cart)} className='btn-selected-again'>Choose Again </button>




            </div>

        </div>
    );
};

export default Cart;