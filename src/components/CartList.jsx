import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const CartList = () => {
    const { cart, clear, cartTotal } = useContext(CartContext)

    return (

        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((compra) => <CartItem key={compra.id} compra={compra} />)}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total a pagar: ${cartTotal()}</td>
                    </tr>
                </tfoot>
            </table>
            <div style={{ width: '100%', displey: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button className="btn btn-danger" onClick={clear}>Vaciar carrito</button>
                <Link className="btn btn-success" to="/checkout">Ir a pagar</Link>
            </div>

        </div>

    )
}

export default CartList