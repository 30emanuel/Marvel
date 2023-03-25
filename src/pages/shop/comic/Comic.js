import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiSearch} from "react-icons/fi";
import "./ComiCss.css"



function Comic(props){
    const {comic} = props
    return(
        <div className="comic">
            <img src={`${comic.thumbnail.path}.jpg`}/>
            <div className="comic-info">
                <h2>{comic.title}</h2>
                <h3>${comic.prices[0].price}</h3>
            </div>
            <div className="buttons">
                <Link to={`/comic/${comic.id}`}>
                    <button><FiSearch className="icons"/></button>
                </Link>
                <button><FiShoppingCart className="icons"/></button>
            </div>
        </div>
    )
}

export default Comic