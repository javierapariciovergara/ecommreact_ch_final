import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom'

const CheckoutUseForm = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm()
    const { cart, cartTotal, clear } = useContext(CartContext)
    const [orderId, setOrderId] = useState('')
    // console.log(errors.name.type, "errors")

    const onSubmit = (dataDelForm) => {
        //Cuando pasa las validaciones del hook
        let order = {
            buyer: {
                name: dataDelForm.name,
                lastname: dataDelForm.lastname,
                address: dataDelForm.address,
                email: dataDelForm.email2
            },
            cart: cart,
            total: cartTotal(),
            date: serverTimestamp()
        }

        //Traemos la coleccion
        const ventas = collection(db, "orders")
        addDoc(ventas, order)
            .then((res) => {
                setOrderId(res.id)
                clear()
            })
            .catch((error) => console.log(error))
        //console.log(dataDelForm)
    }

    return (
        <>
            {
                orderId

                    ? <div>
                        <h1>Generaste tu orden con exito</h1>
                        <h4>Tu codigo de seguimiento es : {orderId} </h4>
                        <Link to="/" className='btn btn-dark'>Volver a Principal</Link>
                    </div>

                    :
                    <div>
                        <h1>Completa el formulario con tus datos</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Nombre</label>
                            <input className="form-control" type='text' name='name' {...register("name", { required: true, minLength: 3 })} />
                            {errors?.name?.type === "required" && <p style={{ color: 'red' }}>Por favor complete el campo Nombre</p>}
                            {errors?.name?.type === "minLength" && <p style={{ color: 'red' }}>El nombre debe contener un minimo de 3 caracteres</p>}

                            <label>Apellido</label>
                            <input className="form-control" type='text' name='lastname' {...register("lastname", { required: true, minLength: 3 })} />
                            {errors?.lastname?.type === "required" && <p style={{ color: 'red' }}>Por favor complete el campo Apellido</p>}
                            {errors?.lastname?.type === "minLength" && <p style={{ color: 'red' }}>El Apellido debe contener un minimo de 3 caracteres</p>}

                            <label>Direccion</label>
                            <input className="form-control" type='text' name='address' {...register("address", { required: true, minLength: 3, maxLength: 40 })} />
                            {errors?.address?.type === "required" && <p style={{ color: 'red' }}>Por favor complete el campo Direccion</p>}
                            {errors?.address?.type === "minLength" && <p style={{ color: 'red' }}>La direccion debe contener un minimo de 3 caracteres</p>}
                            {errors?.address?.type === "maxLength" && <p style={{ color: 'red' }}>La direccion debe contener un maximo de 40 caracteres</p>}

                            <label>Email</label>
                            <input className='form-control' type='email' name='email1' {...register("email1", { required: true })} />
                            {errors?.email1?.type === "required" && <p style={{ color: 'red' }}>Por favor complete el campo Email</p>}
                            <label>Confirmación de Email</label>
                            <input className='form-control' type='email' name='email2'{...register("email2", { required: true, validate: { equalsMails: mail2 => mail2 === getValues().email1 } })} />
                            {errors?.email2?.type === "required" && <p style={{ color: 'red' }}>Por favor complete el campo Confirmación de Email</p>}
                            {errors?.email2?.type === "equalsMails" && <p style={{ color: 'red' }}>Los mails deben ser iguales</p>}

                            <button className='btn btn-dark' type='submit' disabled={!cart.length}>Confirmar Compra</button>
                        </form>
                    </div>
            }
        </>
    )
}

export default CheckoutUseForm