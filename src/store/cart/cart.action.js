import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

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

const clearCartItem = (cartItems,cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


export const addItemToCart = (cartItems, productToAdd)=>{
    const newCartItem = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItem = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItem = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
}    

export const setIsCartOpen =(boolean) => 
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);