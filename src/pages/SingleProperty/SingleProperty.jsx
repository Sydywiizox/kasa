import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "@hooks/useFetch.js";
import { useEffect, useState } from "react";
import Slideshow from "@components/Slideshow/Slideshow";
import Rating from "@components/Rating/Rating";
import Collapse from "@components/Collapse/Collapse";
import "./SingleProperty.scss";

const LOGEMENTS__PATH = "/src/data/logements.json";

function SingleProperty() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { loading, data: logements, error } = useFetch(LOGEMENTS__PATH);
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        if (logements) {
            const foundLogement = logements.find((logement) => logement.id === id);
            if (foundLogement) {
                setLogement(foundLogement);
            } else {
                navigate("/404");
            }
        }
    }, [logements, id, navigate]);

    if (loading) {
        return <div>Chargement en cours...</div>;
    }

    if (error) {
        return <div>Erreur : {error.message}</div>;
    }

    if (!logement) {
        return null;
    }

    return (
        <main>
            <section className="single-property">
                <Slideshow images={logement.pictures} title={logement.title} />
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
                <Rating rating={logement.rating} />
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
    );
}

export default SingleProperty;