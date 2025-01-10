import { Link } from "react-router-dom";
import "./Error404.scss";

function Error404() {
  return (
    <main>
      <section className="error404">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </section>
    </main>
  );
}

export default Error404;
