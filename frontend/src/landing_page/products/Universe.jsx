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
          <p className="mt-3 small text-muted px-5">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-md-4">
          <img style={{ width: "60%" }} src={sensibullLogo} alt="" />
          <p className="mt-4 small text-muted px-5">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-md-4">
          <img style={{ width: "50%" }} src={tijori} alt="" />
          <p className="mt-1 small text-muted px-5">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-md-4">
          <img style={{ width: "50%" }} src={streakLogo} alt="" />
          <p className="mt-3 small text-muted px-5">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-md-4">
          <img style={{ width: "60%" }} src={smallcaseLogo} alt="" />
          <p className="mt-3 small text-muted px-5">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4">
          <img style={{ width: "40%" }} src={dittoLogo} alt="" />
          <p className="mt-3 small text-muted px-5">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className="text-center">
        <div className="btn btn-primary my-5 fs-5 px-3">Sign up for free</div>
      </div>
    </div>
  );
}
