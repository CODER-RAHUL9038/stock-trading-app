import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav class="navbar  navbar-expand-lg w-full  border-bottom py-2 fw-medium ">
        <div class="container-fluid ">
          <Link class="navbar-brand  ms-5" to="/">
            <img
              style={{ height: "36px" }}
              src="/images/logo.png"
              alt="brand-logo"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse  text-center "
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto mb-2 mt-1 mb-lg-0 ">
              <li class="nav-item  px-3">
                <Link class="nav-link " aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item px-3">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item px-3">
                <Link class="nav-link" to="/product">
                  Products
                </Link>
              </li>
              <li class="nav-item px-3">
                <Link class="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item px-3">
                <Link class="nav-link" to="/support">
                  Support
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
