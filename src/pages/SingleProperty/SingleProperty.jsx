import { useParams } from "react-router-dom";
import { useFetch } from "@hooks/useFetch.js";
import { useEffect, useState } from "react";
import Slideshow from "@components/Slideshow/Slideshow";
import Rating from "@components/Rating/Rating";
import Collapse from "@components/Collapse/Collapse";
import "./SingleProperty.scss";

const LOGEMENTS__PATH = "/src/data/logements.json";

function SingleProperty() {
    const id = useParams().id;
    const { loading, data: logements, error } = useFetch(LOGEMENTS__PATH);
    const [logement, setLogement] = useState(null);
    useEffect(() => {
        if (logements) {
            const logementCopy = logements.find(
                (logement) => logement.id === id
            );
            setLogement(logementCopy);
        }
    }, [logements]);

    if (loading) {
        return <div>Chargement en cours...</div>;
    }

    if (error) {
        return <div>Erreur : {error.message}</div>;
    }

    return (
        (logement && (
            <main>
                <section className="single-property">
                    <Slideshow
                        images={logement.pictures}
                        title={logement.title}
                    />
                    <h1 className="single-title">{logement.title}</h1>
                    <p>{logement.location}</p>
                    <Rating rating={3} />
                    <div className="tags">
                    {logement.tags.map((tag, index) => {
                        return <span className="tag" key={index}>{tag}</span>
                    }) }
                    </div>
                    <p>{logement.host.name}</p>
                    <img className="host-name" src={logement.host.picture} alt={logement.host.name} />
                    <Collapse title="Description">
                        {logement.description}
                    </Collapse>

                    <Collapse title="Equipements">
                        {logement.equipments.map((equipment, index) => (
                                <p key={index}>{equipment}</p>
                        ))}
                    </Collapse>
                </section>
            </main>
        )) || <div>Logement introuvable</div>
    );
}

export default SingleProperty;
