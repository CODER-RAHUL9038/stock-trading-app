import homeHero from "../../assets/images/homeHero.png";
export default function Hero() {
  return (
    <div className="container pb-5  " style={{marginTop:"100px"}}>
      <div className="row ">
        <img src={homeHero} alt="Hero Image" />
        <div className="cta text-center my-5">
          <h1>Invest in everything</h1>
          <p className="my-3">
            Online platform to invest in stocks, derivative, mutual funds, and
            more
          </p>
          <div className="text-center">
        <div className="btn btn-primary mt-4 fs-5 px-3">Sign up for free</div>
      </div>
        </div>
      </div>
    </div>
  );
}
