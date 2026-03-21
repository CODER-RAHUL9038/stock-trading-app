import homeHero from "../../assets/images/homeHero.png";
export default function Hero() {
  return (
    <div className="container pb-5  ">
      <div className="row ">
        <img src={homeHero} alt="Hero Image" />
        <div className="cta text-center my-5">
          <h1>Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivative, mutual funds, and
            more
          </p>
          <div className="btn btn-primary ">Sign up for free</div>
        </div>
      </div>
    </div>
  );
}
