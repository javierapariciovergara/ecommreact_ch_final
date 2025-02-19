import Button from "react-bootstrap/Button"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

import CenteredComponent from "./CenteredComponent"
import LoaderComponent from "./LoaderComponent"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../services/firebase"


const ItemListContainer = (props) => {
    const { greeting } = props
    const [productsList, setProductsList] = useState([])
    const [loader, setLoader] = useState(false);
    const { categoryId } = useParams()
    

    //PROMISE Firebase
    useEffect(() => {
        setLoader(true)
        //conexion con la coleccion de Firebase
        const productsCollection = categoryId
            //ternario con metodo de Firebase llamado Query para filtrar las categorias
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products")
        // pedir los datos-documentos
        getDocs(productsCollection)
            .then((res) => {
                const list = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProductsList(list)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoader(false))
    }, [categoryId])


    return (
        <CenteredComponent>
            <>
                
                {loader
                    ? <LoaderComponent />
                    :
                    <div>
                        <h1>{greeting} {categoryId && <span style={{ color: "aquamarine" }}>{categoryId}</span>}</h1>
                        <ItemList productsList={productsList} />
                    </div>
                }
            </>
        </CenteredComponent>

    )
}

export default ItemListContainer