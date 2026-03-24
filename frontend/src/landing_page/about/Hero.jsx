export default function About() {
  return (
    <div className="container p-5 px-4" style={{marginTop:"80px"}}>
      {/* Hero Section */}
      <div className="text-center my-5">
        <h3 className="fw-normal pb-5">
          We are building the future of trading in India.
          <br />
          With smarter technology and better accessibility.
        </h3>
      </div>

      <hr />

      {/* Content Section */}
      <div
        className="row gy-5   justify-content-center"
        style={{ marginTop: "50px" }}
      >
        {/* Left */}
        <div className="col-lg-5">
          <p>
            We started Quantify with a clear vision — to break the barriers that
            traders and investors in India face every day, from high costs and
            complex tools to limited access to reliable technology.
          </p>

          <p>
            At its core, Quantify is built to simplify trading and investing,
            making powerful financial tools accessible to everyone, regardless
            of their experience level.
          </p>

          <p>
            Our mission is simple — to make trading smarter, faster, and more
            transparent through technology-driven solutions.
          </p>
        </div>

        {/* Right */}
        <div className="col-lg-5">
          <p>
            Today, Quantify empowers users with data-driven insights, intuitive
            design, and a seamless experience that helps them make confident
            financial decisions.
          </p>

          <p>
            We are not just building a platform; we are building a community of
            informed, disciplined, and forward-thinking traders.
          </p>

          <p>
            Quantify represents clarity, precision, and control — everything a
            modern investor needs.
          </p>

          <p>And we are just getting started 🚀</p>
        </div>
      </div>

      {/* People Section */}
      <div className="text-center mt-5 ">
        <h3 className="py-4">People</h3>
      </div>

      <div className="row  mt-4 ">
        {/* Image */}
        <div className="col-lg-6 text-center">
          <img
            src="images/rahul1.png"
            alt="Founder"
            className="img-fluid rounded-circle"
            style={{ width: "360px", height: "360px", objectFit: "cover" }}
          />
          <h5 className="mt-4 fs-3 text-muted">Rahul Shaw</h5>
          <p>Founder, CEO</p>
        </div>

        {/* Content */}
        <div className="col-lg-6 mt-4">
          <p>
            Rahul Shaw is building Quantify to overcome the challenges he faced
            while learning and exploring trading and technology. Starting from
            scratch, he has been consistently working on developing real-world
            applications and sharpening his skills as a full-stack developer.
          </p>

          <p>
            Today, he is focused on building products that simplify trading and
            make technology more accessible and user-friendly.
          </p>

          <p>
            He believes in continuous learning, building in public, and growing
            through consistency.
          </p>

          <p>Coding is his zen.</p>

          <p>
            Connect on{" "}
            <a href="/" className="text-decoration-none text-primary">
              Homepage
            </a>{" "}
            /{" "}
            <a
              className="text-decoration-none text-primary"
              href="https://github.com/CODER-RAHUL9038"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            /{" "}
            <a
              className="text-decoration-none text-primary"
              href="https://www.linkedin.com/in/rahulshaw-dev"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            /{" "}
            <a
              className="text-decoration-none text-primary"
              href="https://rahulshaw.carrd.co/"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
