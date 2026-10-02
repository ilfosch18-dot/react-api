// importo gli hook 
import { useState,useEffect } from "react"  
// importo il componente HammerTony
import HammerTony from "../ui/HammerTony";
//  dichiaro la funzione ElencoRicette
export default function ElencoRicette() {

// dichiaro la costante di stato per le ricette
const [listaRicette, setListaRicette] = useState([]);
// dichiaro la costante di stato per il loader
const [loading, setLoading] = useState(false);

// uso l'hook useEffect per recuperare i dati dall'API altrimenti avrei INFINITE LOOPE
useEffect(() => {
    async function recuperaRicette() {
      setLoading(true);
      // Fake delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      try { //FUNZIONA?? SE SI ESEGUI CODICE SOTTO ALTRIMENTI FAI CATCH
        // CHIAMATA API
        const response = await fetch("https://dummyjson.com/recipes"); 
        // RISPOSTA OK??
        if (!response.ok) { 
            throw new Error("Errore nella risposta dell'API");
        }     
        // CONVERTI JSON IN OGGETTO JS
        const data = await response.json(); 

        setListaRicette(data.recipes);
      } catch (error) { //catch error
        console.error(error);
      } finally { //finally quando ha finito
        setLoading(false);
      }
    }
    // chiamo la funzione asincrona
    recuperaRicette();
  }, []); // [] vuol dire che parte solo una volta 

  // SE STA ANCORA CARICANDO, MOSTRA HAMMER TONY
  if (loading) {
    return <HammerTony />;
  }

  // QUANDO HA FINITO, MOSTRA LE RICETTE
  return (
    <section className="container py-5">
      <h2 className="mb-4">Ricette</h2>

      <ul className="row g-4 list-unstyled">
        {/*uso il ciclo map per visualizzare le ricette  */}
        {listaRicette.map((ricetta) => (
          <li
            className="col-12 col-md-6 col-lg-4"
            key={ricetta.id}
          >
            <div className="card h-100">
              <img
                src={ricetta.image}
                className="card-img-top"
                alt={ricetta.name}
              />

              <div className="card-body">
                <h5 className="card-title">
                  {ricetta.name}
                </h5>

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