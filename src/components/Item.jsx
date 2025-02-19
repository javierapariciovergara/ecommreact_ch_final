import React from 'react'
import { Link } from "react-router-dom"

const Item = ({product}) => {
  
    
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={product.img} className="card-img-top" alt={product.name}/>
        <div className="card-body">
          <h5 className="card-title"> {product.name} </h5>
          <p className="card-text">${product.price} </p>
          <Link className="btn btn-primary" to={`/item/${product.id}`}>Ver mas</Link>
        </div>
        
      </div>
  )
}

export default Item