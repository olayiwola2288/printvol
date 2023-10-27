import styles from "./Hero.module.css";
import img from "../../src/assets/printivo-removebg-preview.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Hero() {
  return (
    <div className={styles.back}>
      <div className="d-flex justify-content-between mx- pt-3">
        <div>
          <img
            src={img}
            alt=""
            className="pt-"
          />
        </div>
        <div className="d-flex">
          <p className="px-4 d-none d-md-inline-block ">All Products</p>
          <p className="px-4 d-none d-md-inline-block ">Become a Reseller</p>
          <p className="d-none d-md-inline-block ">Merch Store</p>
          <p className="d-none d-md-inline-block ">Marketplace</p>
        </div>
        <div className="lg-d-flex">
          <button className="mx-4 border border-0  bg-transparent">
            Sign in
          </button>
          <button className="border border-0  bg-transparent">
            Create Account
          </button>
          <AiOutlineShoppingCart className="px-1 fs-1" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
