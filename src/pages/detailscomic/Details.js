import { useParams } from "react-router-dom"
import "./Details.css"
import { getComic } from "../../api"
import { useEffect, useState } from "react"

function Details(){
    const id = useParams().id
    const [comic, setComic] = useState()
    const [loading, setLoading] = useState(true)

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
      <h3>${comic.prices[0].price}</h3>
      {comic.description ? (
        <p>{comic.description}</p>
      ) : (
        <p>Sem descrição informada.</p>
      )}
      <button>Adicionar ao carrinho</button>
    </div>
  </div>
  )}
</article>
    )
}

export default Details