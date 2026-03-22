import { Link } from "react-router-dom";
import HomePage from "../landing_page/home/HomePage";
export default function NotFound() {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <h2>404 couldn’t find that page</h2>
        <p>
          Visit <Link to={HomePage}>Quantify’s home page</Link>
        </p>
      </div>
    </div>
  );
}
