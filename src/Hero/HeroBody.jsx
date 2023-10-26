import styles from "./Hero.module.css";

function HeroBody() {
  return (
    <div className={styles.back}>
      <div className="d-lg-flex justify-content-between py-5 ms-5">
        <div>
          <h1 style={{ fontWeight: "bolder", fontSize: "5rem" }}>
            Quality Prints
          </h1>
          <h4 style={{ opacity: "0.7", fontSize: "2rem" }}>
            Shipped to your doorstep
          </h4>
          <p className="mt-5 fs-4">What would you like to print today?</p>
          <textarea
            name=""
            id=""
            cols="40"
            rows="1"
            placeholder=" Search for business card, T-shirt,Mugs,etc"
            className={` py-3 `}
          ></textarea>
        </div>
        <div>
          <img
            src="./src/assets/Card3_n9kqin.png"
            alt=""
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
export default HeroBody;
