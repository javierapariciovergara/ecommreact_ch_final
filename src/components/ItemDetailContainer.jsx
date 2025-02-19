import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'
import { Link } from 'react-router-dom'

const ItemDetailContainer = () => {

  // const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(false)
  const [invalidItem, setInvalidItem] = useState(false)

  useEffect(() => {
    setLoading(true)
    //conectar con la collection
    const productCollection = collection(db, "products")
    //crear una referencia
    const docRef = doc(productCollection, id)
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setItem({ id: res.id, ...res.data() })
        } else {
          setInvalidItem(true)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])


  if (invalidItem) {
    return <div>
      <h2>El item no existe...</h2>
      <Link to="/" className="btn btn-dark">Volver a Home</Link>
    </div>
  }

  return (
    <div>
      <ItemDetail item={item} ></ItemDetail>
    </div>

  )
}

export default ItemDetailContainer