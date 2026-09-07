import { Link } from "react-router-dom";


const services = [
  {
    name: "Wedding Photography",
    price: "₹35,000 / day",
    description:
      "Beautifully captured moments, emotions and memories from your special day.",
  },
  {
    name: "Pre-Wedding Photography",
    price: "₹15,000 onwards",
    description:
      "Relaxed and beautiful couple portraits before your wedding day.",
  },
  {
    name: "Candid Photography",
    price: "₹20,000 / day",
    description:
      "Natural moments, real emotions and memories captured as they happen.",
  },
  {
    name: "Engagement Photography",
    price: "₹15,000 onwards",
    description:
      "A beautiful collection of photographs from your engagement celebration.",
  },
  {
    name: "Model Shoot",
    price: "₹8,000 onwards",
    description:
      "Creative portrait sessions designed around your style and personality.",
  },
  {
    name: "Maternity Photography",
    price: "₹10,000 onwards",
    description:
      "Beautiful and timeless photographs celebrating the journey of motherhood.",
  },
  {
    name: "Bridal Portraits",
    price: "₹8,000 onwards",
    description:
      "Elegant bridal portraits capturing every detail of your special look.",
  },
  {
    name: "Traditional Photography",
    price: "₹15,000 / day",
    description:
      "Complete traditional coverage of the important moments and rituals.",
  },
];

function Services() {
  return (
    <main className="page">
      <section className="page-header">
        <p className="small-title">OUR SERVICES</p>

        <h1>
          Beautiful moments.
          <br />
          Honest prices.
        </h1>

        <p className="services-intro">
          Simple photography packages for weddings,
          celebrations and special moments across Kerala.
        </p>
      </section>

      <section className="services">
        {services.map((service) => (
          <div className="service-card" key={service.name}>

            <div className="service-top">
              <h2>{service.name}</h2>

              <p className="service-price">
                {service.price}
              </p>
            </div>

            <p className="service-description">
              {service.description}
            </p>

            <Link to="/contact" className="service-link">
              Enquire Now →
            </Link>

          </div>
        ))}
      </section>

      <section className="pricing-note">
        <p className="small-title">A LITTLE NOTE</p>

        <h2>
          Every celebration is different.
        </h2>

        <p>
          The prices above are starting prices.
          Final pricing depends on the number of
          events, hours of coverage, team size,
          location and the package you choose.
        </p>

        <p>
          Contact us and we'll create a package
          that fits your celebration.
        </p>
      </section>
    </main>
  );
}

export default Services;
