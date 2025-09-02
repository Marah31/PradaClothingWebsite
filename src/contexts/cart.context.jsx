import {createContext, useReducer} from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

const addCartItem = (cartItems, productToAdd)=>{
    // find if cartItems has the product that I want to add
    // if found, increment quantity
    // return new array with modified cartItems/ new cart item
    const existingCartItem = cartItems.find(
        (cartItem)=> cartItem.id === productToAdd.id
    
    );

    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity +1 } : cartItem
    );
    }

    // if not found
    return [...cartItems, {...productToAdd, quantity:1}]; // this will run if the item I wanna add doesn't match anything in the old array of cart items, and it means i want 
    // everything was in the cart previously, and add to it the new product with quantity 1 
}

const removeCartItem = (cartItems, productToRemove)=>{
   const existingCartItem = cartItems.find(
        (cartItem)=> cartItem.id === productToRemove.id
    
    );
    if (!existingCartItem) return cartItems;
    
    if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }

    return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? 
        {...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
    
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemToCart: ()=>{},
    cartCount: 0,
    removeCartItem: ()=>{},
    clearItemFromCart: ()=>{},
    cartTotal:0
});

const INITIAL_STATE ={
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal:0,
}

const CART_ACTION_TYPES ={
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN:'SET_IS_CART_OPEN'
}


const cartReducer = (state, action) =>{
    const {type, payload} = action;

    switch (type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return{
                ...state,
                ...payload,
            };
        
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            };
            
        default: 
            throw new Error(`unhandled type of ${type} in cartReducer`)
    }
}



const clearCartItem = (cartItems,cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartProvider = ({children}) =>{

    const [{isCartOpen,cartItems, cartCount,cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const addItemToCart = (productToAdd)=>{
        const newCartItem = addCartItem(cartItems,productToAdd);
        updateCartItemsReducer(newCartItem);
    }

    const removeItemFromCart = (productToRemove)=>{
        const newCartItem = removeCartItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItem);
    }

    const clearItemFromCart = (cartItemToClear)=>{
        const newCartItem = clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItem);
    }
    const setIsCartOpen =(bool) =>{
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool ));
    }

    const updateCartItemsReducer =(newCartItems)=>{
        const newCartCount = newCartItems.reduce((total,cartItem )=>total + cartItem.quantity ,0);
        const newCartTotal = newCartItems.reduce((cartTotal,cartItem )=>cartTotal + cartItem.quantity * cartItem.price ,0);
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{cartItems: newCartItems, cartTotal: newCartTotal, cartCount: newCartCount} ));
    }
    const value = {isCartOpen,setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart,cartItems, cartCount, cartTotal};

    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};