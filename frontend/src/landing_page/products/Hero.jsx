export default function Hero() {
  return (
    <div
      className="container px-3 border-bottom  "
      style={{ paddingBottom: "50px", marginTop: "80px" }}
    >
      {/* Text Section */}
      <div className="text-center mt-5">
        <h1 className="fs-2">Quantify Products</h1>
        <h3 className="text-muted fs-4 mt-3">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="text-muted my-4">
          Check out our{" "}
          <a className="link-primary link-underline-opacity-0 " href="">
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}
