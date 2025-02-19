/* CartWidget con React Bootstrap/Icons */

import { MdShoppingCart } from "react-icons/md";
import Badge from "react-bootstrap/Badge"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const CartWidgetRI = () => {
    const { cartQuantity } = useContext(CartContext)
    return (

        <div>
            <MdShoppingCart color="white" fontSize={'30'} />
            {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        </div>

    )
}

export default CartWidgetRI