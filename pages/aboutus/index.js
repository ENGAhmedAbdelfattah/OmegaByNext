import Image from "next/image";
import { connect } from "react-redux";
import enAboutUs from "./../../public/translations/en/pages/aboutus/aboutus-en.json";
import arAboutUs from "./../../public/translations/ar/pages/aboutus/aboutus-ar.json";
import { useTranslate } from "./../../hooks/useTranslate";

function AboutUs({ aboutUsImgs, onHandleLinksActiveClosed }) {
  const { t } = useTranslate(enAboutUs, arAboutUs);
  return (
    <main className="aboutUs" onClick={onHandleLinksActiveClosed}>
      <div className="container">
        <div className="aboutUs-top">
          <h2>{t.aboutUs.header}</h2>
          <p>{t.aboutUs.paragraph}</p>
        </div>
        <div className="aboutUs-bottom">
          <div className="aboutUs-bottom-left">
            <div className="cart-top">
              <h3>{t.aboutUs.card.header}</h3>
              <p>{t.aboutUs.card.paragraph}</p>
            </div>
            <div className="cart-bottom">
              <div className="item item1">
                <div className="hand-img">
                  <Image src={aboutUsImgs.aboutUs2} alt="" />
                </div>
                <div className="item-text">
                  <h3>{t.aboutUs.card.items.item1.header}</h3>
                  <p>{t.aboutUs.card.items.item1.paragraph}</p>
                </div>
              </div>
              <div className="item item2">
                <div className="hand-img">
                  <Image src={aboutUsImgs.aboutUs3} alt="" />
                </div>
                <div className="item-text">
                  <h3>{t.aboutUs.card.items.item2.header}</h3>
                  <p>{t.aboutUs.card.items.item2.paragraph}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutUs-bottom-right">
            <div className="hand-image">
              <Image
                src={aboutUsImgs.aboutUs1}
                alt="persons talking and work on laptops"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    aboutUsImgs: state.allImages.pagesImgs.aboutUsImgs,
  };
};

export default connect(mapStateToProps)(AboutUs);
