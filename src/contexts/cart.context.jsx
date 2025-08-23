import {useEffect, createContext, useState} from 'react';

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

const clearCartItem = (cartItems,cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartProvider = ({children}) =>{

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect( ()=>{
        const newCartCount = cartItems.reduce((total,cartItem )=>total + cartItem.quantity ,0);
        setCartCount(newCartCount);
    }, [cartItems]);


    useEffect( ()=>{
        const newCartTotal = cartItems.reduce((cartTotal,cartItem )=>cartTotal + cartItem.quantity * cartItem.price ,0);
        setCartTotal(newCartTotal);
    }, [cartItems]);


    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd));
    }

    const removeItemFromCart = (productToRemove)=>{
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const clearItemFromCart = (cartItemToClear)=>{
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    }

    const value = {isCartOpen,setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart,cartItems, cartCount, cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};