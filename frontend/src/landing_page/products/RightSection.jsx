export default function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  linkText = "Learn More →",
}) {
  return (
    <div className="container px-4  py-3 ">
      <div className="row mt-5 justify-content-evenly align-items-center">
        {/* Left Col */}
        <div className="col-md-4 order-2 order-md-1 ">
          <h2 className="fs-3 text-muted  mt-5 mt-md-0">{productName}</h2>
          <p className="mt-4">{productDescription}</p>
          <a className="link-primary link-underline-opacity-0" href={learnMore}>
            {linkText}
          </a>
        </div>
        {/* Right Col */}
        <div className="col-md-7 order-1 order-md-2">
          <img src={imageURL} alt={productName} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}
