import {
    CheckoutItemContainer,
    ImageContainer,
    ProductInfos,
    Quantity,
    Value,
    Arrow,
    RemoveButton
} from'./checkout-item.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const ChechoutItem = ({cartItem})=>{
    const {name, imageUrl, price, quantity} = cartItem;

    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const increaseItemQuantityHandler = ()=> addItemToCart(cartItem);
    const decreaseItemQuantityHandler = ()=> removeItemFromCart(cartItem);

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