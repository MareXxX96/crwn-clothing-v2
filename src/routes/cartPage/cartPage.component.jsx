import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CartPage = () => {
    const {cartItems, setCartItems, noOfProducts, setNoOfProducts} = useContext(CartContext)

    const deleteSelectedElement = (productId, productQuantity) => {
        const filteredCartItems = cartItems.filter((cartItem) => (cartItem.id !== productId));
        setCartItems(filteredCartItems)
        setNoOfProducts(noOfProducts - productQuantity)
    }

    return (
        <div className='cart-page-item-container'>
            <table>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {console.log(cartItems)}
                {cartItems.map((cartItem) => (
                    <tr key={cartItem.id}>
                    <td>{cartItem.name}</td>
                    <td>{cartItem.imageUrl}</td>
                    <td>{cartItem.quantity}</td>
                    <td>{cartItem.price}</td>
                    <td><button onClick={() => deleteSelectedElement(cartItem.id, cartItem.quantity)}>X</button></td>
                    </tr>
                ))}
                </tbody>
            </table> 
        </div>
    )
}

export default CartPage