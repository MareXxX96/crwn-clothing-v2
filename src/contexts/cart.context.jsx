import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id == productToAdd.id)
    
    if (existingCartItem) {
        return cartItems.map((cartItem) => (
            cartItem.id == productToAdd.id ? {...cartItem, quantity : cartItem.quantity + 1} : cartItem
        ))
    }

    return [...cartItems, {...productToAdd, quantity : 1}]

}

export const CartContext = createContext({
    cartOpened : false,
    setCartStatus : () => {},
    cartItems : [],
    setCartItems: () => {},
    noOfProducts : 0,
    setNoOfProducts: () => {}
})

export const CartProvider = ({ children }) => {
    const [cartOpened, setCartStatus] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const [noOfProducts, setNoOfProducts] = useState(0)

    const addItemToCart = (productToAdd) => {
        setNoOfProducts(noOfProducts + 1)
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = {cartOpened, setCartStatus, setCartItems, cartItems, addItemToCart, noOfProducts, setNoOfProducts}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}