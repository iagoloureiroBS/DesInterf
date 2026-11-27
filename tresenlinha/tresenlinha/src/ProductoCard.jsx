

export default function ProductoCard({producto}) {
  return (
      <section className="card" style="max-width: 320px">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{producto.id}</h4>
          <p className="card-text">Some quick.</p>
        </div>
      </section>
  );
}