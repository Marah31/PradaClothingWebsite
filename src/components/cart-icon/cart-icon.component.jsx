import { useContext } from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/004 shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import {CartIconContainer, ItemCount, ShoppingIconBag} from './cart-icon.styles.jsx';


const CartIcon = () =>{
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen= ()=>setIsCartOpen(! isCartOpen);
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIconBag as={ShoppingIcon}></ShoppingIconBag>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;