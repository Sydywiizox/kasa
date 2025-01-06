import { NavLink } from "react-router-dom";
import "./Error404.scss";

function Error404() {
  return (
    <section className="error404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </section>
  );
}

export default Error404;
