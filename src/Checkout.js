import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';
import Subtotal from './Subtotal'
function Checkout() {
    const [{ basket }] = useStateValue();


    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout_ad'
                    src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img17/SWP/hilton/hilton-header._V503680456_.jpg"
                    alt="" />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping box is guetting empty</h2>
                        <p>You have no item in the basket. <strong>"Hire me as a dev to add them"</strong> </p>
                    </div>
                ) : (
                        <div>
                            <h2 className='checkout_title'>Your basket</h2>
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}

                        </div>
                        // list out all of th products
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    < Subtotal />
                </div>
                // <Subtotal/>
            )}
        </div>
    )
}

export default Checkout
