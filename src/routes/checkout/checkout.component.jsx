import './checkout.styles.scss';
import ChechoutItem from '../../components/checkout-item/checkout-item.component';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

const CheckOut = ()=>{
    const cartTotal= useSelector(selectCartTotal);
    const cartItems = useSelector(selectCartItems);
    
    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>

                </div>
                <div className='header-block'>
                    <span>Quantity</span>

                </div>
                <div className='header-block'>
                    <span>Price</span>

                </div>
                <div className='header-block'>
                    <span>Remove</span>

                </div>

            </div>
            {cartItems.map((cartItem) =>(
                <ChechoutItem key={cartItem.id} cartItem={cartItem}></ChechoutItem>
            ))}    
            <span className='total'>Total: ${cartTotal}</span>

        </div>
    );

};

export default CheckOut;

