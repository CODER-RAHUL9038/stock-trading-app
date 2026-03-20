export default function Pricing() {
  return (
    <div>
      <div className="container  py-5">
        <div className="row mt-5">
          {/* Left */}
          <div className="col-4">
            <h2>Unbeatable pricing</h2>
            <p className="mt-4">
              We pioneer the concept of discount broking and price transparency
              in India. Flat fees and no hidden charges.
            </p>
            <a className="link-primary link-underline-opacity-0  " href="/">
              See pricing →
            </a>
          </div>

          {/* Spacing */}
          <div className="col-2"></div>

          {/* Right */}
          <div className="col-6">
            <div className="row g-0 text-center ">
              <div className="col  border p-4">
                <h2>₹0</h2>
                <p className="p-1">Free equity delivery and direct mutual funds</p>
              </div>
              <div className=" col">
                <div className="col border p-4 ">
                  <h2>₹20 </h2>
                  <p className="p-3">Intraday and F&O</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
