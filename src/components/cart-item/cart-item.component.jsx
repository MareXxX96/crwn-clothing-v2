import './cart-item.styles.scss'

import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'

const CartItem = ({cartItem}) =>  {
    const {name, imageUrl, price, quantity} = cartItem

    return(
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
            <div>
                <button className='button'>X</button>
            </div>
        </div>
    )
}

export default CartItem