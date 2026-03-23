import zerodhaFundhouse from "../../assets/images/zerodhaFundhouse.png";
import streakLogo from "../../assets/images/streakLogo.png";
import sensibullLogo from "../../assets/images/sensibullLogo.svg";
import smallcaseLogo from "../../assets/images/smallcaseLogo.png";
import tijori from "../../assets/images/tijori.svg";
import dittoLogo from "../../assets/images/dittoLogo.png";
export default function Universe() {
  return (
    <div className="container py-5">
      <h1 className="text-center fs-3">The Zerodha Universe</h1>
      <p className="text-center mt-4">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row g-4 mt-5 text-center">
        <div className="col-md-4">
          <img style={{ width: "60%" }} src={zerodhaFundhouse} alt="" />
          <p></p>
        </div>
        <div className="col-md-4">
          <img style={{ width: "60%" }} src={sensibullLogo} alt="" />
          <p></p>
        </div>
        <div className="col-md-4">
          <img style={{ width: "50%" }} src={tijori} alt="" />
          <p></p>
        </div>
        <div className="col-md-4">
          <img style={{ width: "50%" }} src={streakLogo} alt="" />
          <p></p>
        </div>

        <div className="col-md-4">
          <img style={{ width: "60%" }} src={smallcaseLogo} alt="" />
          <p></p>
        </div>

        <div className="col-md-4">
          <img style={{ width: "40%" }} src={dittoLogo} alt="" />
          <p></p>
        </div>
      </div>
    </div>
  );
}
