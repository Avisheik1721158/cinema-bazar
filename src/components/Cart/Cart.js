import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'

const Cart = ({ cart, clearButton, chooseOne, randomChoose }) => {
    // let newMovie = [];
    // for (const carts of cart) {
    //     newMovie = newMovie + carts.name;
    //     // console.log(newMovie)
    // }

    // console.log(cart.length)
    if (cart.length > 4) {
        toast('Please select 4 movies')
        clearButton()

    }


    return (
        <div className='cart'>
            <h4>Selected Movie</h4>
            <div>
                {
                    cart.map((carts) => {





                        return (

                            <div className='cart-text' key={carts.id}>



                                <p><img className='img' src={carts.image} alt="" /></p>
                                {/* key={carts.id} */}
                                <h3>   {carts.name} </h3> {' '}
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
                                    <p><img className='img' src={items.image} alt="" /></p>
                                    <h3> {items.name}</h3> {' '}
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