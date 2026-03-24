export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#FBFBFB" }}>
      <div className="container-fluid py-5  border-top text-center">
        <div className="row justify-content-center ">
          {/* COLUMN 1 - LOGO + SOCIAL */}
          <div className="col-lg-3 col-md-6 mb-4">
            <img
              src="/images/logo.png"
              alt="brand-logo"
              className="img-fluid w-50 w-md-75"
            />

            <p
              className="mt-3 text-muted fw-medium"
              style={{ fontSize: "14px" }}
            >
              © 2010 - 2024, Quantify Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="d-flex gap-3 py-3 text-muted fs-5 justify-content-center">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled vstack gap-3 mt-3 text-muted">
              <li>About</li>
              <li>Products</li>
              <li>Pricing</li>
              <li>Referral programme</li>
              <li>Careers</li>
              <li>Quantify.tech</li>
              <li>Press & media</li>
              <li>Quantify cares (CSR)</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled vstack gap-3 mt-3 text-muted">
              <li>Contact</li>
              <li>Support portal</li>
              <li>Q-Connect blog</li>
              <li>List of charges</li>
              <li>Downloads & resources</li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled vstack gap-3 mt-3 text-muted">
              <li>Open an account</li>
              <li>Fund transfer</li>
              <li>60 day challenge</li>
            </ul>
          </div>
        </div>
        <div
          className="text-muted"
          style={{ fontSize: "12px", lineHeight: "1.8" }}
        >
          <p>
            Quantify Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Quantify Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019 Registered Address: Quantify Broking Ltd., #153/154,
            4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
            4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints
            pertaining to securities broking please write to{" "}
            <a
              href="mailto:complaints@quantify.com"
              className="text-primary text-decoration-none"
            >
              complaints@quantify.com
            </a>{" "}
            , for DP related to{" "}
            <a
              href="mailto:dp@quantify.com"
              className="text-primary text-decoration-none"
            >
              dp@quantify.com
            </a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on{" "}
            <a href="#" className="text-primary text-decoration-none">
              SEBI SCORES
            </a>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>

          <p>
            <a href="#" className="text-primary text-decoration-none">
              Smart Online Dispute Resolution
            </a>{" "}
            |{" "}
            <a href="#" className="text-primary text-decoration-none">
              Grievances Redressal Mechanism
            </a>
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE.{" "}
            <a href="#" className="text-primary text-decoration-none">
              NSE broker factsheet
            </a>
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets – once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Quantify and offering such services, please{" "}
            <a href="#" className="text-primary text-decoration-none">
              create a ticket here
            </a>
            .
          </p>

          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
      </div>
    </footer>
  );
}
