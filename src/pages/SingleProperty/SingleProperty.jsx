import { useParams } from "react-router-dom";
import { useFetch } from "@hooks/useFetch.js";
import { useEffect, useState } from "react";

const LOGEMENTS__PATH = "/src/data/logements.json";

function SingleProperty() {
    const id = useParams().id;
    const { loading, data:logements, error } = useFetch(LOGEMENTS__PATH);
    const [logement, setLogement] = useState(null);
    useEffect(() => {
        if (logements) {
            setLogement(logements.find((logement) => logement.id === id))
            console.log(logement);
        }
    }, [logements]);
    
    if(loading) {
        return <div>Chargement en cours...</div>
    }

    if(error) {
        return <div>Erreur : {error.message}</div>
    }

    return (
        (logement && (
            <main>
                <section className="single-property">
                    <h1>{logement.title}</h1>
                    <img src={logement.cover} alt={logement.alt} />
                    <p>{logement.description}</p>
                </section>
            </main>
        )) || <div>Logement introuvable</div>
    );
}

export default SingleProperty;
