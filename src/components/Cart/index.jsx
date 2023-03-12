import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const Cart = () =>{
    const{ cart, totalPrice} = useCartContext();

    if(cart.lenght === 0) {
        return(
            <>
            <p>No hay elementos en el carrito</p>
            <Link to= '/'>Hacer compras</Link>
            </>
        );
    }

    return(
        <div>Cart</div> 
    )
}


export default Cart;