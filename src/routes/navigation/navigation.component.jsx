import { Outlet} from 'react-router-dom';
import {NavigationContainer, NavLink, NavLinks, LogoContainer} from './navigation.styles.jsx';
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
      <NavigationContainer>
        <LogoContainer to='/'>
            <Pradalogo className='logo'/>
        </LogoContainer>
        
        <NavLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {currentUser ? ( 
                <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink> ) : (
                <NavLink to='/auth'>
                SIGN IN
                </NavLink>
                
            )} {/* this means if there is current user, show sign out as an option, 
            if there is no current user, show sing in as an option  */}
           <CartIcon></CartIcon>
        </NavLinks>
        {isCartOpen && <CartDropdown/> /* this is to check if the cart is open, since components are always true, the one side that has effect is isCartOpen, if yes, then true and true = true */} 
      </NavigationContainer>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;