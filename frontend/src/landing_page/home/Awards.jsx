import largestBroker from "../../assets/images/largestBroker.svg";
import pressLogos from "../../assets/images/pressLogos.png";
export default function Awards() {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row  ">
          {/* Left Image */}
          <div className=" col-12 col-lg-6">
            <img style={{width:"90%"}} src={largestBroker} alt="Award Image" />
          </div>
          {/* Right Content */}
          <div className=" col-12 col-lg-6 mt-5 mt-lg-3">
            {/* Content */}
            <div className="content">
              <h2>Largest Stock broker in India</h2>
              <p>
                2+ million Quantify clients contribute to over 15% of all retail
                order <br />
                volumes in India daily by trading and investing in:
              </p>
              <div className="row pt-5">
                <div className="col-6  ">
                  <ul className=" vstack gap-3">
                    <li>Future and Options</li>
                    <li>Commodity derivatives</li>
                    <li>Currency derivatives</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className=" vstack gap-3 mb-4">
                    <li>Stocks & IPOs</li>
                    <li>Direct mutual funds</li>
                    <li>Bonds and Govt.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Image */}

            <img src={pressLogos} alt="" style={{ width: "90%",marginTop:"15px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
