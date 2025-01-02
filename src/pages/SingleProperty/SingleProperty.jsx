import Collapse from "@components/Collapse/Collapse";
import Rating from "@components/Rating/Rating";
import Slideshow from "@components/Slideshow/Slideshow";
import { useFetch } from "@hooks/useFetch.js";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
        <div className="container">
          <div className="left">
            <h1 className="single-title">{logement.title}</h1>
            <p className="single-location">{logement.location}</p>
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span className="tag" key={index}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="right">
            <div className="host">
              <p>{addBrToString(logement.host.name)}</p>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            <Rating rating={logement.rating} />
          </div>
        </div>
        <div className="collapses">
          <Collapse title="Description">{logement.description}</Collapse>
          <Collapse title="Equipements">
            {logement.equipments.map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
          </Collapse>
        </div>
      </section>
    </main>
  );
}

function addBrToString(string) {
  return string.split(" ").map((word, index) => (
    <React.Fragment key={index}>
      {word}
      {index < string.split(" ").length - 1 && <br />}
    </React.Fragment>
  ));
}

export default SingleProperty;
