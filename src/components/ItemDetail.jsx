import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import CenteredComponent from './CenteredComponent'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({ item }) => {
  const [purchase, setPurchase] = useState(false)
  const { cart, addItem, itemQuantity } = useContext(CartContext)


  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });


  const onAdd = (cantidad) => {
    setPurchase(true)
    //alert(`Agregaste ${cantidad} al carrito`) // Alert opcional para no usar el toast
    Toast.fire({
      icon: "success",
      title: "Agregaste el producto al carrito correctamente"
    })
    addItem(item, cantidad)
  }

  const stockActualizado = item.stock - itemQuantity(item.id)

  return (
    <CenteredComponent>
      <h1>Detalle de : {item.name} </h1>
      <p> Descripcion : {item.description} </p>
      <p>Stock disponible : {stockActualizado} unidades </p>
      <p>Precio : ${item.price} </p>
      <img src={item.img} alt={item.name} />

      {
        !purchase
          ? <ItemCount stock={stockActualizado} onAdd={onAdd} />
          : <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link>
      }

    </CenteredComponent>
  )
}

export default ItemDetail