import React from 'react'
import "../style/CheckoutProduct.css"

function CheckoutProduct() {
  return (
    <div className='checkoutProduct'>
    <img className='checkoutProduct__image' src="/" />

    <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>tilte</p>
        <p className="checkoutProduct__price">
            <small>LKR </small>
            <strong>240</strong>
        </p>
        <div className="checkoutProduct__rating">
            {Array(5)
            .fill()
            .map((_, i) => (
                <p>🌟</p>
            ))}
        </div>
    
            <button >Remove from Basket</button>
        
    </div>
</div>
  )
}

export default CheckoutProduct