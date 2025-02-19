import React from 'react'
import { useState } from "react"
import useCounter from '../hooks/useCounter'

const ItemCount = ({ stock, onAdd }) => {
    const { count, add, subtract } = useCounter(stock)



    return (
        <div>
            <div>
                <button className='btn btn-danger' onClick={subtract} disabled={count === 0} >-</button>
                <span className='btn'> {count} </span>
                <button className='btn btn-success' onClick={add} disabled={count === stock} >+</button>
            </div>
            <button className='btn btn-primary' disabled={count === 0 || stock === 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount