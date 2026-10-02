import { useState,useEffect } from "react"  
export default function ElencoRicette() {

const [listaRicette, setListaRicette] = useState([])

useEffect(() => {
    async function recuperaRicette() {
        try {
            const response = await fetch('https://dummyjson.com/recipes')
            const data = await response.json()
            setListaRicette(data.recipes)
        } catch (error) {
            console.error(error)
        }
    }
    recuperaRicette()
}, [])


  return (
    <section className="container py-5">
      <h2 className="mb-4">Ricette</h2>

      <ul className="row g-4 list-unstyled">
        {listaRicette.map((ricetta) => (
          <li className="col-12 col-md-6 col-lg-4" key={ricetta.id}>
            <div className="card h-100">
              <img
                src={ricetta.image}
                className="card-img-top"
                alt={ricetta.name}
              />

              <div className="card-body">
                <h5 className="card-title">{ricetta.name}</h5>

                <p className="card-text">
                  Descrizione della ricetta...
                </p>

                <span className="badge bg-primary">
                  Categoria
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}