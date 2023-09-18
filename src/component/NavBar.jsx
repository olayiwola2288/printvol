import styles from "./NavBar.module.css";
import { RiWhatsappFill } from "react-icons/ri";

function NavBar() {
  return (
    <div className="d-flex justify-content-between px-5 py-2">
      <div className="d-flex justify-content-between">
        <p className="px-2 d-none d-md-inline-block ">Cost Calculator</p>
        <p className="px-2 d-none d-md-inline-block ">Discover Stores</p>
        <p className="px-2 d-none d-md-inline-block ">Track Orders</p>
      </div>
      <div>
        <p>
          <span className="d-none d-md-inline-block ">Need help? Call:</span>{" "}
          <span className={styles.col}> +2348091084333</span>
        </p>
      </div>
      <div>
        <RiWhatsappFill className="fs-1  text-success" />
      </div>
      <div className=" border rounded-5 px-3 pt-2 ">
        <p className="d-flex justify-content-between">
          {" "}
          <img
            src="./src/assets/Flag_of_Nigeria.svg.png"
            alt=""
            className={styles.ime}
          />{" "}
          Nigeria{" "}
        </p>
      </div>
    </div>
  );
}

export default NavBar;
