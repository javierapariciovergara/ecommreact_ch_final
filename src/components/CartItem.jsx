import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({ compra }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <tr>
            <td>{compra.id}</td>

            <td>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    //justifyContent: 'center',
                    gap: '10px'
                }}>
                    <img
                        src={compra.img}
                        alt={compra.name}
                        style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px', borderRadius: '5px' }}
                    />
                    <span>{compra.name}</span>
                </div>
            </td>

            {/* <td>{compra.name}</td> */}
            <td>{compra.quantity}</td>
            <td>${compra.price}</td>
            <td>${compra.quantity * compra.price}</td>
            <td>
                <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>X</button>
            </td>
        </tr>
    )
}

export default CartItem