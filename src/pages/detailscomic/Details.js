import React, {useContext} from "react"
import { useParams } from "react-router-dom"
import "./Details.css"
import { getComic } from "../../api"
import { useEffect, useState } from "react"
import { CartContext } from "../../cartContext"

function Details(){
  const id = useParams().id
  const [comic, setComic] = useState()
  const [loading, setLoading] = useState(true)
  const {addItem} = useContext(CartContext)

  const fetchComic = async (id) => {
    try {
      const data = await getComic(id)
      const result = await data.data.results[0]
      console.log(result)
      setComic(result)
      setLoading(false)
    } catch (error) {
      console.log('Error fetchComic:', error)
    }
  }

  useEffect(() => {
    fetchComic(id)
  }, [id])

  return(
    <article>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <div className="comic-container">
          <div className="comic-image">
            <img src={`${comic.thumbnail.path}.jpg`} alt={comic.title} />
          </div>
          <div className="comic-description">
            <h2>{comic.title}</h2>
            <h3>{comic.prices[0].price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</h3>
            {comic.description ? (
              <p>{comic.description}</p>
            ) : (
              <p>Sem descrição informada.</p>
            )}
            <button onClick={() => addItem(comic)}>Adicionar ao carrinho</button>
          </div>
        </div>
      )}
    </article>
  )
}

export default Details