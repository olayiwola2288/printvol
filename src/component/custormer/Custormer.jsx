import { TiSocialTwitterCircular } from "react-icons/ti";
import styles from "./Custormer.module.css";

function Custormer() {
  return (
    <>
      <section className={styles.backG}>
        <div>
          <h3 className="mx-5 pt-5 pb-4">What Customers Say About Us 🙌🏾</h3>
          <div className="d-lg-flex   justify-content-center mt-2">
            <div className="mx-4">
              <div className="card mb-3" style={{ width: "20rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    <TiSocialTwitterCircular className="fs-1 text-info" />
                    Amina Ebele
                    <span className="text-blue-400">@DeliciousAmina</span>
                  </h5>
                  <p className="card-text">
                    I am now the unofficial
                    <span className="text-blue-400">
                      @Printivo ambassador
                    </span>{" "}
                    . What these guys just pulled to ensure I got my menu cards
                    today is stunning!
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-4">
              <div className="card mb-3" style={{ width: "20rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    <TiSocialTwitterCircular className="fs-1 text-info" />
                    Oluwatosin
                    <span className="text-blue-400">@tosingirlfx</span>
                  </h5>
                  <p className="card-text">
                    I am now the unofficial
                    <span className="text-blue-400">@Printivo</span> . delivered
                    my mugs in 24hrs. Thank you so much! It's nice doing
                    business with you. More to come.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-4">
              <div className="card mb-3" style={{ width: "20rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    <TiSocialTwitterCircular className="fs-1 text-info" />
                    Oluwatosin <span className="text-blue-400">@olgablark</span>
                  </h5>
                  <p className="card-text">
                    I am now the unofficial
                    <span className="text-blue-400">@Printivo ambassador</span>.
                    What these guys just pulled to ensure I got my menu cards
                    today is stunning!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Custormer;
