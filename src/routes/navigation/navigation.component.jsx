import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
import { Fragment, useContext } from 'react';
import {ReactComponent as Pradalogo} from '../../assets/007 crown.svg';
import { UserContext } from '../../contexts/user.context';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

const Navigation =() =>{
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return(
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
            <Pradalogo className='logo'/>
        </Link>
        
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            {currentUser ? ( 
                <span className='nav-link' onClick={signOutUser}>SIGN OUT</span> ) : (
                <Link className='nav-link' to='/auth'>
                SIGN IN
                </Link>
                
            )} {/* this means if there is current user, show sign out as an option, 
            if there is no current user, show sing in as an option  */}
           <CartIcon></CartIcon>
        </div>
        {isCartOpen && <CartDropdown/> /* this is to check if the cart is open, since components are always true, the one side that has effect is isCartOpen, if yes, then true and true = true */} 
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;