import ecosystem from "../../assets/images/ecosystem.png";
export default function Stats() {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row mt-5">
          {/* Left */}
          <div className="col-6">
            <h2>Trust with confidence</h2>
            <div className="mt-5">
              <h3>Customer-first always</h3>
              <p className = "text-muted">
                That's why 1.3+ crore customer trust Quantify with ₹3.5+ lakh
                crores worth of equity investments
              </p>
            </div>
            <div class="mt-4">
              <h3>No spam or gimmicks</h3>
              <p className = "text-muted">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like.
              </p>
            </div>

            <div class="mt-4">
              <h3>The Zerodha universe</h3>
              <p className = "text-muted">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>

            <div class="mt-4">
              <h3>Do better with money</h3>
              <p className = "text-muted">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
          </div>
          {/* Right */}
          <div className="col-6">
            <img src={ecosystem} alt="" style={{ width: "75%" }} />
            <div className="mt-3">
              <a className="link-primary link-underline-opacity-0 ms-4 me-2 " href="">
              Explore our products →
            </a>
            <a className="link-primary link-underline-opacity-0 ms-5 " href="">
              Try kite
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
