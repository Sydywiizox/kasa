import Collapse from "@components/Collapse/Collapse";
import Rating from "@components/Rating/Rating";
import Slideshow from "@components/Slideshow/Slideshow";
import { useFetch } from "@hooks/useFetch.js";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Estate.scss";

const LOGEMENTS__PATH = "/src/data/logements.json";

function Estate() {
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
    return <div className="loader"></div>;
  }

  if (error) {
    return <div className="error">Erreur : {error.message}</div>;
  }

  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  return (
    <main>
      <section className="estate">
        <Slideshow images={logement.pictures} title={logement.title} />
        <div className="container">
          <div className="left">
            <h1 className="estate-title">{logement.title}</h1>
            <p className="estate-location">{logement.location}</p>
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

/**
 * Given a string, this function splits it into words and returns a React component
 * that displays each word on a separate line. The component is a React.Fragment
 * so that it can be used as a single element in a parent component.
 * @param {string} string - The string to be split and displayed.
 * @returns {React.ReactElement} - A React component that displays the string
 *                                split into words with line breaks.
 */
function addBrToString(string) {
  return string.split(" ").map((word, index) => (
    <React.Fragment key={index}>
      {word}
      {index < string.split(" ").length - 1 && <br />}
    </React.Fragment>
  ));
}

export default Estate;
