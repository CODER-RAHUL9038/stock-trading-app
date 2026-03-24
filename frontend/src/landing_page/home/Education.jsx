import education from "../../assets/images/education.svg";
export default function Education() {
  return (
    <div>
      <div className="container  py-5">
        <div className="row text-center ">
          {/* Left */}
          <div className="col-lg-6">
            <img style={{width:"80%"}} src={education} alt="Varsity Image" />
          </div>
          {/* Right */}
          <div className="col-lg-6">
            <div>
              <h2>Free and open market education</h2>

              <div class="mt-5">
                <p>
                  Varsity, the largest online stock market education book in the
                  world covering everything from the basics to advance d
                  trading.
                </p>
                <a className=" link-primary link-underline-opacity-0 " href="#">
                  Varsity →
                </a>
              </div>

              <div class="mt-5">
                <p>
                  TradingQ&A, the most active trading and investment community
                  in India for all your market related queries.
                </p>
                <a className=" link-primary link-underline-opacity-0" href="#">
                  TradingQ&A →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
