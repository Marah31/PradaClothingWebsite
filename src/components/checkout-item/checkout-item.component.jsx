import {
    CheckoutItemContainer,
    ImageContainer,
    ProductInfos,
    Quantity,
    Value,
    Arrow,
    RemoveButton
} from'./checkout-item.styles.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';

const ChechoutItem = ({cartItem})=>{
    const {name, imageUrl, price, quantity} = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const increaseItemQuantityHandler = ()=> dispatch(addItemToCart(cartItems, cartItem));
    const decreaseItemQuantityHandler = ()=> dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <ProductInfos>{name}</ProductInfos>
            <Quantity as='span'>
                <Arrow onClick={decreaseItemQuantityHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={increaseItemQuantityHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <ProductInfos>{price}</ProductInfos>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton> {/* this creates the x button */}

        </CheckoutItemContainer>
    )

}

export default ChechoutItem;