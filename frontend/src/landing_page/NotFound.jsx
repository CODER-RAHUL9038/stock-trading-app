import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-muted  my-5 py-5 px-5">
      <div className="row">
        <h1 className="fs-2">404 couldn&apos;t find that page</h1>
        <h5 className="mt-3">
          We couldn&apos;t find the page you were looking for.
        </h5>
        <h5>
          Visit{" "}
          <Link className="link-primary link-underline-opacity-0" to="/">
            Quantify&apos;s home page
          </Link>
        </h5>
      </div>
    </div>
  );
}
