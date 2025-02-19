import React, { createContext, useEffect, useState } from "react";

//Creo el context
export const CartContext = createContext()
const ProductosDelLocalStorage = JSON.parse(localStorage.getItem('carrito')) || []

//Declaro el proveedor

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(ProductosDelLocalStorage)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])


    const addItem = (item, quantity) => {
        let compra = {...item, quantity}

        if(isInCart(item.id)){
            //sumar cantidades para no tener productos repetidos
            const carritoActualizado = cart.map((prod)=> {
                if(prod.id === item.id){
                    //sumar cantidades
                    return {...prod, quantity: prod.quantity + quantity}
                }else{
                    return prod
                }
            })
            setCart(carritoActualizado)
        }else{
            //sumar un item nuevo que no esta en el carrito
            setCart([...cart, compra])
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const cartQuantity = () =>{
        return cart.reduce((acc, item)=> acc += item.quantity , 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc,item)=> acc += item.price * item.quantity,0)
    }

    const itemQuantity = (id) => {
        const itemInCart = cart.find((prod)=> prod.id === id)
        if(itemInCart){
            //DEVUELVE LA CANTIDAD QUE HAY EN EL CARRITO DE ESE ITEM
            return itemInCart.quantity
        }else{
            //No existe en el carrito, tengo que retornar un valor
            return 0
        }
     }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, cartQuantity, cartTotal, itemQuantity }}>
            {children}
        </CartContext.Provider>
    )
}



