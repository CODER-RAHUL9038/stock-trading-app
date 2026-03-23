import googlePlayBadge from "../../assets/images/googlePlayBadge.svg";
import appstoreBadge from "../../assets/images/appstoreBadge.svg";
export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container px-4 py-5 " style={{ marginTop: "30px" }}>
      <div className="row mt-5 justify-content-evenly align-items-center">
        <div className="col-md-6 order-1 ">
          <img src={imageURL} alt={productName} style={{ width: "100%" }} />
        </div>
        <div className="col-md-4 order-2 ">
          <h2 className="fs-3 text-muted mt-5 mt-md-0">{productName}</h2>
          <p className="mt-4">{productDescription}</p>

          <div className="row g-4 ">
            <div className="col-6  text-center ">
              {" "}
              <a
                className="link-primary link-underline-opacity-0"
                href={tryDemo}
              >
                Try Demo →
              </a>
            </div>
            <div className="col-6  text-center">
              {" "}
              <a
                className="link-primary link-underline-opacity-0"
                href={learnMore}
              >
                Learn More →
              </a>
            </div>
            <div className="col-6  text-center">
              <a
                className="link-primary link-underline-opacity-0"
                href={googlePlay}
              >
                <img src={googlePlayBadge} />
              </a>
            </div>
            <div className="col-6  text-center">
              <a
                className="link-primary link-underline-opacity-0"
                href={appStore}
              >
                <img src={appstoreBadge} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
