import { useContext } from 'react'

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles.jsx'

import { CartContext } from '../../contexts/cart.context'

const CartIcon = () => {

    const {noOfProducts} = useContext(CartContext)

    const {cartOpened, setCartStatus} = useContext(CartContext)
    const toggleCartOpen = () => setCartStatus(!cartOpened)

    return(
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon/>
            <ItemCount>{noOfProducts}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon