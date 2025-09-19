import {ReactComponent as ShoppingIcon} from '../../assets/004 shopping-bag.svg';
import {CartIconContainer, ItemCount, ShoppingIconBag} from './cart-icon.styles.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';


const CartIcon = () =>{

    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);

    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen= ()=> dispatch(setIsCartOpen(!isCartOpen));
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIconBag as={ShoppingIcon}></ShoppingIconBag>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;