import {Name, CartItemContainer,ItemDetails,ItemImage} from './cart-item.styles.jsx';


const CartItem = ({cartItem}) =>{

    const {name, quantity, imageUrl, price} = cartItem;
    return(
        <CartItemContainer>
            <ItemImage src={imageUrl} alt={`${name}`}></ItemImage>
            <ItemDetails>
                <Name>{name}</Name>
                <span className='price'>{quantity} x {price}</span>
            </ItemDetails>
            
        </CartItemContainer>
    );

};

export default CartItem;