import './product-card.styles.scss'
import Button, {BUTTON_TYPE_CLASSES}from '../button/button.component'
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {cartOpened, setCartStatus, addItemToCart, cartItems} = useContext(CartContext)

    const updateAndOpenCart = () => {
        setCartStatus(true);
        addItemToCart(product)
    }

    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={updateAndOpenCart}>Add to cart</Button>
            </div>
        </div>
    )
}

export default ProductCard