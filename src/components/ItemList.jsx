import React from 'react'
import Item from './Item'

const ItemList = ({productsList}) => {
  return (

    <div className="d-flex justify-content-around align-items-center flex-wrap">
        {productsList.map((product) => <Item key={product.id} product={product}/>)}
    </div>
  
)
}

export default ItemList