import styles from "./Hero.module.css";

function HeroCarosel() {
  return (
    <div className={styles.caro}>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <p className="text-center pt-2 fs-4">
              sticker promo <button>Shop now</button>
            </p>
          </div>
          <div className="carousel-item pt-2">
            <p className="text-center  pt-2 fs-4">
              10% off Brochure & flyer <button>Shop now</button>
            </p>
          </div>
          <div className="carousel-item pt-2">
            <p className="text-center  pt-2 fs-4">
              sticker promo <button>Shop now</button>
            </p>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section></section>
    </div>
  );
}

export default HeroCarosel;
