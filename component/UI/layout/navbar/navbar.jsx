import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import enNavBar from "./../../../../public/translations/en/layout/navbar/navbar-en.json";
import arNavBar from "./../../../../public/translations/ar/layout/navbar/navbar-ar.json";
import { useTranslate } from "./../../../../hooks/useTranslate";
function NavBar({
  navBarImgs,
  navbarPaths,
  isDisplay,
  onHandleLinksToggle,
  onHandleLinksActiveClosed,
}) {
  const { t } = useTranslate(enNavBar, arNavBar);

  const nextRouter = useRouter();
  const router = useRouter();
  const { locale, asPath } = useRouter();
  const handleBtnLang = () => {
    if (locale === "en") {
      router.push(asPath, asPath, { locale: "ar" });
    } else {
      router.push(asPath, asPath, { locale: "en" });
    }
  };

  // methods
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (locale === "en") {
      // document.getElementsByTagName("html")[0].setAttribute("lang", "en");
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    } else {
      // document.getElementsByTagName("html")[0].setAttribute("lang", "ar");
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    }
  }, [locale]);
  const handleSignGo = (path) => {
    nextRouter.push(`/${path}`);
  };

  return (
    <>
      <nav className={`nav-links ${offset >= 500 ? "scroll" : ""}`}>
        <div className="container">
          <div className="nav-box">
            <div className="logo-box">
              <div className="logo-img" onClick={() => handleSignGo("home")}>
                <Image src={navBarImgs.logoImg} alt="" />
              </div>
              <i
                className="fa-solid fa-bars fa-2x"
                onClick={() => onHandleLinksToggle()}
              ></i>
            </div>

            <div className={`list-box ${isDisplay ? "active" : ""}`}>
              <ul className="list-ul">
                {t.navBar.navList.map((el, inx) => (
                  <li className="list-item" key={inx + el}>
                    <Link
                      className="list-item"
                      href={Object.values(navbarPaths)[inx]}
                      onClick={() => onHandleLinksActiveClosed()}
                    >
                      {el}
                    </Link>
                  </li>
                ))}
                <button className="change-lang mobile" onClick={handleBtnLang}>
                  {t.navBar.lang}
                </button>
              </ul>
            </div>

            <div className="sign-box">
              <button className="change-lang desktop" onClick={handleBtnLang}>
                {t.navBar.lang}
              </button>
              {/* <button
                type="button"
                className="login"
                onClick={() => handleSignGo("login")}
              >
                {t.navBar.login}
              </button>
              <button
                type="button"
                className="sign-out"
                onClick={() => handleSignGo("signup")}
              >
                {t.navBar.signUp}
              </button> */}
              {/* <Link
                activeClassName={locale === "es-ES"}
                href={asPath}
                locale="es-ES"
              >
                es-ES
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    navBarImgs: state.allImages.navBarImgs,
    navbarPaths: state.allPaths.navbarPaths,
  };
};

export default connect(mapStateToProps)(NavBar);
