import React, {useEffect, useState} from "react";
import {getComics} from "../../api"
import Comic from "./comic/Comic";
import "./ShopCss.css"

function Shop() {
  const [comics, setComics] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  
  const limit = 20
  
  const fetchComics = async (offset) => {
    try {
      setLoading(true)
      const data = await getComics(offset, limit)
      const results = await data.data.results
      setComics(results)
      setLoading(false)
      setTotalPages(Math.ceil(data.data.total / limit))
    } catch (error) {
      console.log("fetchComics error", error)
    }
  }
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  
  useEffect(() => {
    fetchComics((currentPage - 1) * limit)
  }, [currentPage])
  
  return (
    <main className="shop">
      <nav className="constrols">
        <button onClick={handlePrevPage}>Anterior</button>
        <button onClick={handleNextPage}>Próxima</button>
        <span>{`Página ${currentPage} de ${totalPages}`}</span>
      </nav>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <section className="comics-grid">
          {comics &&
            comics.map((comic, index) => {
                return <Comic key={index} comic={comic} />
            })}
        </section>
      )}
    </main>
  )
}
  
export default Shop