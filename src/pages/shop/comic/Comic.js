import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiSearch} from "react-icons/fi";
import "./ComiCss.css"
import { CartContext } from '../../../cartContext';


function Comic(props){
    const {comic} = props
    const {addItem} = useContext(CartContext)
    return(
        <div className="comic">
            <img src={`${comic.thumbnail.path}.jpg`}/>
            <div className="comic-info">
                <h2>{comic.title}</h2>
                <h3>{comic.prices[0].price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</h3>
            </div>
            <div className="buttons">
                <Link to={`/comic/${comic.id}`}>
                    <button><FiSearch className="icons"/></button>
                </Link>
                <button onClick={()=> addItem(comic)}><FiShoppingCart className="icons"/></button>
            </div>
        </div>
    )
}

export default Comic