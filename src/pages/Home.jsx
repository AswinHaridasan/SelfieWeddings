import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p>WEDDING PHOTOGRAPHY & FILMS</p>

          <h1>
            Your Story.
            <br />
            Our Frame.
          </h1>

          <p>
            Beautiful moments from beautiful
            <br />
            Malayali weddings.
          </p>

          <Link to="/contact" className="button">
            Let's Talk
          </Link>
        </div>
      </section>

      <section className="home-intro">
        <p className="small-title">SELFIE WEDDING STUDIO</p>

        <h2>
          We don't just take pictures.
          <br />
          We capture memories.
        </h2>

        <p>
          From the first smile to the final goodbye,
          we capture the little moments that make
          your wedding story special.
        </p>

        <Link to="/gallery" className="text-link">
          View Our Work →
        </Link>
      </section>
    </main>
  );
}

export default Home;