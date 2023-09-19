import styles from "./Card.module.css";
import image from "../../assets/The product/1440201227_two-sided-business-cards-by-printivo.png";
import image1 from "../../assets/The product/1572522725_flyer-1sided.png";
import image2 from "../../assets/The product/1656003107_social-media--15.png";
import image3 from "../../assets/The product/1661456358_social-media--16.png";
import image4 from "../../assets/The product/1439790190_postcard.jpg";
import image5 from "../../assets/The product/1446183154_big rollup banner.png";
import image6 from "../../assets/The product/1572259118_product-5-(1).png";
import image7 from "../../assets/The product/1473167305_trifold-brochure-printing.png";
import image8 from "../../assets/The product/1456215784_12.png";
import image9 from "../../assets/The product/1485151940_White-tshirt.png";
import image10 from "../../assets/The product/1572258123_product-3-(1).png";
import image11 from "../../assets/The product/1607424257_63f28e7a-da1d-4685-a297-964e186a2170.jpeg";
import image12 from "../../assets/The product/1473159158_Christmas-card-for-this-wonderful-season.png";
import image13 from "../../assets/The product/1473165427_stickers.png";
import image14 from "../../assets/The product/Group_61_h8vxko.png";

function Card() {
  return (
    <>
      <section className="my-3 mx-2 d-lg-flex justify-content-between">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image}
            className={styles.productImage}
            alt="..."
            style={{ width: "350px", height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-medium">Two-sided Business Cards</h5>
            <p className="card-text fw-medium">STARTING AT</p>
            <p className="card-text fw-medium">₦9,700 per 100</p>
            <button className="bg-red-400 p-2 rounded-2 fw-medium">
              Browse Two-sided Bu...
            </button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image1}
            className={styles.productImage}
            alt="..."
            style={{ width: "350px", height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-medium">A5 flyers (Single Sided)</h5>
            <p className="card-text fw-medium">STARTING AT</p>
            <p className="card-text fw-medium">₦16,500 per 100</p>
            <button className="bg-red-400 p-2 rounded-2 fw-medium">
              Browse A5 flyers (S...
            </button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image2}
            className={styles.productImage}
            alt="..."
            style={{ width: "350px", height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-medium">
              Round Stickers 3.5 Diameter
            </h5>
            <p className="card-text fw-medium">STARTING AT</p>
            <p className="card-text fw-medium">₦10,900 per 100</p>
            <button className="bg-red-400 p-2 rounded-2 fw-medium">
              Browse Round Sticke...
            </button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image3}
            className={styles.productImage}
            alt="..."
            style={{ width: "350px", height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-medium">Simple Mugs</h5>
            <p className="card-text fw-medium">STARTING AT</p>
            <p className="card-text fw-medium">₦3,000 per 1</p>
            <button className="bg-red-400 p-2 rounded-2 fw-medium">
              Browse Simple Mugs
            </button>
          </div>
        </div>
      </section>
      <section className="my-3 mx-2 d-lg-flex justify-content-between">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image4}
            className={styles.productImage}
            alt="..."
            style={{ width: "350px", height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-medium">Postcards (A6)</h5>
            <p className="card-text fw-medium">STARTING AT</p>
            <p className="card-text fw-medium">₦14,200 per 50</p>
            <button className="bg-red-400 p-2 rounded-2 fw-medium">
              Browse Postcards (A...
            </button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image5}
            className={styles.productImage}
            alt="..."
            style={{ width: "350px", height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-medium">Roll Up Banners (Big Base)</h5>
            <p className="card-text fw-medium">STARTING AT</p>
            <p className="card-text fw-medium">₦35,200 per 1</p>
            <button className="bg-red-400 p-2 rounded-2 fw-medium">
              Browse Roll Up Bann....
            </button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image6}
            className={styles.productImage}
            alt="..."
            style={{ width: "350px", height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-medium">A2 Posters</h5>
            <p className="card-text fw-medium">STARTING AT</p>
            <p className="card-text fw-medium">₦45,500 per 100</p>
            <button className="bg-red-400 p-2 rounded-2 fw-medium">
              Browse A2 Posters...
            </button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image7}
            className={styles.productImage}
            alt="..."
            style={{ width: "350px", height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-medium">Trifold Brochures</h5>
            <p className="card-text fw-medium">STARTING AT</p>
            <p className="card-text fw-medium">₦30,400 per 100</p>
            <button className="bg-red-400 p-2 rounded-2 fw-medium">
              Browse Trifold Broc...
            </button>
          </div>
        </div>
      </section>
      <section className="my-3 mx-2 d-lg-flex justify-content-between">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image8}
            className={styles.productImage}
            alt="..."
            style={{ width: "350px", height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-medium">Landscape ID Cards</h5>
            <p className="card-text fw-medium">STARTING AT</p>
            <p className="card-text fw-medium">₦3,800 per 1</p>
            <button className="bg-red-400 p-2 rounded-2 fw-medium">
              Browse Landscape ID...
            </button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image9}
            className={styles.productImage}
            alt="..."
            style={{ width: "350px", height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-medium">Off White T-shirts</h5>
            <p className="card-text fw-medium">STARTING AT</p>
            <p className="card-text fw-medium">₦3,800 per 1</p>
            <button className="bg-red-400 p-2 rounded-2 fw-medium">
              Browse Off White T-...
            </button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image10}
            className={styles.productImage}
            alt="..."
            style={{ width: "350px", height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-medium">A4 Branded Paper Bags</h5>
            <p className="card-text fw-medium">STARTING AT</p>
            <p className="card-text fw-medium">₦67,000 per 100</p>
            <button className="bg-red-400 p-2 rounded-2 fw-medium">
              Browse A4 Branded P...
            </button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image11}
            className={styles.productImage}
            alt="..."
            style={{ width: "350px", height: "250px" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-medium">A4 Courier Bags</h5>
            <p className="card-text">STARTING AT</p>
            <p className="card-text fw-medium">₦17,600 per 100</p>
            <button className="bg-red-400 p-2 rounded-2 fw-medium">
              Browse A4 Courier B...
            </button>
          </div>
        </div>
      </section>

      <section>
        <a href="#" className="float-end me-5">
          See All Products
        </a>

        <h3 className="fw-bold ms-5 mt-4">Popular Categories</h3>
        <div className="d-lg-flex mx-5 mt-4">
          <div className="card mx-3 " style={{ width: "18rem" }}>
            <img
              src={image12}
              className={styles.productImage}
              alt="..."
              style={{ width: "350px", height: "250px" }}
            />
            <div className="card-body">
              <h5 className="card-title fw-medium">Greeting Cards</h5>
              <p className="card-text fw-medium">STARTING AT</p>
              <p className="card-text fw-medium">₦19,000 per 50</p>
              <button className="bg-red-400 p-2 rounded-2 fw-medium">
                Browse Greeting Car...
              </button>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={image13}
              className={styles.productImage}
              alt="..."
              style={{ width: "350px", height: "250px" }}
            />
            <div className="card-body">
              <h5 className="card-title fw-medium">Stickers</h5>
              <p className="card-text fw-medium">STARTING AT</p>
              <p className="card-text fw-medium">₦5,400 per 75</p>
              <button className="bg-red-400 p-2 rounded-2 fw-medium">
                Browse Stickers
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-5 mt-5">
        <h1 className="p-3">Nigeria’s No. 1 online print shop 👑</h1>
        <h4 className="p-3">
          Our print services and solutions are trusted by these brands and{" "}
          <br /> over 15,000 other businesses in Nigeria.
        </h4>
        <img src={image14} alt="" className="pb-5" />
      </section>
    </>
  );
}
export default Card;
