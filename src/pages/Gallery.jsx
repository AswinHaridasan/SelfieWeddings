const photos = [
  "/images/photo1.jpg",
  "/images/photo2.jpeg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
  "/images/photo5.jpg",
  "/images/photo6.jpg",
  "/images/photo7.jpg",
  "/images/photo8.jpg",
  "/images/photo9.jpg",
];

function Gallery() {
  return (
    <main className="page">
      <section className="page-header">
        <p className="small-title">OUR WORK</p>
        <h1>Moments we've captured.</h1>
      </section>

      <section className="gallery">
        {photos.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            alt={`Wedding photograph ${index + 1}`}
          />
        ))}
      </section>
    </main>
  );
}

export default Gallery;