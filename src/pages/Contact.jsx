import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    weddingDate: "",
    service: "",
    message: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!/^[0-9+\-\s]{10,15}$/.test(formData.phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!formData.service) {
      setError("Please select a service.");
      return;
    }

    if (!formData.message.trim()) {
      setError("Please enter your message.");
      return;
    }

    const whatsappMessage = `
Hello Selfie Wedding Studio,

I would like to enquire about your photography services.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Wedding Date: ${formData.weddingDate || "Not decided"}
Service: ${formData.service}

Message:
${formData.message}
`;

    const whatsappURL =
      "https://wa.me/919447646570?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="small-title">LET'S CONNECT</p>

        <h1>
          Your story
          <br />
          starts here.
        </h1>

        <p className="contact-intro">
          Planning your wedding, engagement or a special
          shoot? We'd love to hear about it.
        </p>
      </section>

      <section className="contact-layout">

        {/* LEFT SIDE */}

        <div className="contact-details">

          <div className="contact-detail">
            <span>01</span>

            <div>
              <h3>Visit the Studio</h3>

              <p>
                Selfie Wedding Studio
                <br />
                Karimkulam, Palakkad
                <br />
                Kerala, India
              </p>
            </div>
          </div>

          <div className="contact-detail">
            <span>02</span>

            <div>
              <h3>Call / WhatsApp</h3>

              <p>
                <a href="tel:+919447646570">
                  +91 94476 46570
                </a>

                <br />

                <a href="tel:+919605665168">
                  +91 96056 65168
                </a>
              </p>
            </div>
          </div>

          <div className="contact-detail">
            <span>03</span>

            <div>
              <h3>Send an Email</h3>

              <p>
                <a href="mailto:iamthephotographer007@gmail.com">
                  iamthephotographer007@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="contact-note">
            <p>
              Based in Palakkad.
              <br />
              Capturing love across Kerala.
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="enquiry-box">

          <div className="enquiry-heading">
            <p className="small-title">
              WEDDING ENQUIRY
            </p>

            <h2>
              Tell us about
              <br />
              your special day.
            </h2>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  Your Name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 00000 00000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="weddingDate">
                  Wedding Date
                </label>

                <input
                  id="weddingDate"
                  name="weddingDate"
                  type="date"
                  value={formData.weddingDate}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">
                  Looking For *
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">
                    Select service
                  </option>

                  <option value="Wedding Photography">
                    Wedding Photography
                  </option>

                  <option value="Wedding Films">
                    Wedding Films
                  </option>

                  <option value="Pre-Wedding Photography">
                    Pre-Wedding Photography
                  </option>

                  <option value="Engagement Photography">
                    Engagement Photography
                  </option>

                  <option value="Candid Photography">
                    Candid Photography
                  </option>

                  <option value="Maternity Photography">
                    Maternity Photography
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="message">
                Tell us more *
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your wedding or shoot..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {error && (
              <p className="form-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="submit-button"
            >
              Send Enquiry on WhatsApp
              <span>→</span>
            </button>

          </form>
        </div>

      </section>
    </main>
  );
}

export default Contact;

