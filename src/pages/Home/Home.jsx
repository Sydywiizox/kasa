import Banner from "@components/Banner/Banner";
import Card from "@components/Card/Card";
import image from "@assets/banner_mer.png";
import { useFetch } from "@hooks/useFetch.js";
import "./Home.scss";

const LOGEMENTS__PATH = "/src/data/logements.json";

function Home() {
    const { loading, data:logements, error } = useFetch(LOGEMENTS__PATH);
    return (
        <main>
            <section className="home">
                <Banner
                    image={image}
                    alt="mer"
                    text="Chez vous, partout et ailleurs"
                />
                <div className="home__grid">
                    {loading && <div>Chargement en cours...</div>}
                    {!loading && logements && !logements.length && (
                        <div>Il n'y a aucun logement à afficher</div>
                    )}
                    {error && <div>Erreur : {error.message}</div>}
                    {logements &&
                        logements.map((logement) => (
                            <Card
                                key={logement.id}
                                id={logement.id}
                                title={logement.title}
                                image={logement.cover}
                                alt={logement.alt}
                            />
                        ))}
                </div>
            </section>
        </main>
    );
}

export default Home;
