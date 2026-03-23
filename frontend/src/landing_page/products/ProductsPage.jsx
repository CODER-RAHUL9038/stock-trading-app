import Hero from "./Hero";
import RightSection from "./RightSection";
import Universe from "./Universe";
import LeftSection from "./LeftSection";
import kite from "../../assets/images/kite.png";
import coin from "../../assets/images/coin.png";
import varsity from "../../assets/images/varsity.png";
import console from "../../assets/images/console.png";
import kiteconnect from "../../assets/images/kiteconnect.png";

export default function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL={kite}
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="" //Send href links as props
        learnMore="" //Send href links as props
        googlePlay="" //Send href links as props
        appStore="" //Send href links as props
      />
      <RightSection
        imageURL={console}
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations"
        learnMore="" //Send href links as props
      />
      <LeftSection
        imageURL={coin}
        productName="Coin"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="" //Send href links as props
        learnMore="" //Send href links as props
        googlePlay="" //Send href links as props
        appStore="" //Send href links as props
      />
      <RightSection
        imageURL={kiteconnect}
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="" //Send href links as props
        linkText="Kite Connect →"
      />
      <LeftSection
        imageURL={varsity}
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="" //Send href links as props
        learnMore="" //Send href links as props
        googlePlay="" //Send href links as props
        appStore="" //Send href links as props
      />
      <p className="text-center fs-5 my-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
    </>
  );
}
