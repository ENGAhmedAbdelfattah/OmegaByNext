import { connect } from "react-redux";
import Link from 'next/link';
import Image from "next/image";
import enFooter from "./../../../../public/translations/en/layout/footer/footer-en.json";
import arFooter from "./../../../../public/translations/ar/layout/footer/footer-ar.json";
import { useTranslate } from "./../../../../hooks/useTranslate";
function Footer({
  navBarImgs,
  footerPaths,
  onHandleLinksActiveClosed,
}) {
    const { t } = useTranslate(enFooter, arFooter);

  const theDate = new Date();
  const year = theDate.getFullYear();

  return (
    <footer className="footer" onClick={onHandleLinksActiveClosed}>
      <div className="container">
        <div className="logo-footer">
          <div className="handle-image">
            <Image src={navBarImgs.logoImg} alt="Omega logo" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="links-footer">
          <ul className="list-ul">
            {t.footer.footerList.map((el, inx) => (
              <li className="list-item" key={inx + el}>
                <Link
                  className="list-item"
                  href={Object.values(footerPaths)[inx]}
                >
                  {el}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="copy-right-footer">
          {"© " + year + " "}
          {t.footer.copyRight}
        </div>
      </div>
    </footer>
  );
}

const mapStateToProps = (state) => {
  return {
    // lang: state.langDir.lang,
    // dir: state.langDir.dir,
    // navBar: state.dataText.dataJson.navBar,
    navBarImgs: state.allImages.navBarImgs,
    footerPaths: state.allPaths.footerPaths,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeLang: (language, direction) =>
//       dispatch(changeLang({ payloadLang: language, payloadDir: direction })),
//     changeData: (language) => dispatch(changeData(language)),
//   };
// };
export default connect(mapStateToProps)(Footer);
