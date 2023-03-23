import React from "react";


function Comic(props){
    const {comic} = props
    const imgSrc = `${comic.thumbnail.path}.jpg`
    return(
        <div className="comic">
            <img src={imgSrc}/>
            <div className="comic-info">
                <h2>{comic.title}</h2>
                <h3>${comic.prices[0].price}</h3>
                <button >Adicionar</button>
            </div>
        </div>
    )
}

export default Comic