import Image from "next/image";
import { connect } from "react-redux";

function PricingLanding({ t, pricingImgs }) {
  return (
    <section className="pricing-landing">
      <div className="container">
        <div className="pricing-left">
          <h2>{t.header}</h2>
          <p>{t.paragraph}</p>
        </div>
        <div className="pricing-right">
          <div className="hand-img">
            <Image
              src={pricingImgs.pricingPage1}
              alt="man carry laptop and look for you"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    pricingImgs: state.allImages.pagesImgs.pricingImgs,
  };
};

export default connect(mapStateToProps)(PricingLanding);
