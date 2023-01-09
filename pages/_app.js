import "./../styles/App.scss";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import store from "./../redux/app/store";
import NavBar from "./../component/UI/layout/navbar/navbar.jsx";
import Footer from "./../component/UI/layout/footer/footer.jsx";
import Head from "next/head";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isDisplay, setIsDisplay] = useState(false);
  const handleLinksToggle = () => {
    isDisplay === false ? setIsDisplay(true) : setIsDisplay(false);
  };
  const handleLinksActiveClosed = () => {
    if (isDisplay === true) setIsDisplay(false);
  };
  return (
    <Provider store={store}>
      <NavBar
        onHandleLinksToggle={handleLinksToggle}
        onHandleLinksActiveClosed={handleLinksActiveClosed}
        isDisplay={isDisplay}
      />
      <Component
        onHandleLinksActiveClosed={handleLinksActiveClosed}
        {...pageProps}
      />
      <Footer onHandleLinksActiveClosed={handleLinksActiveClosed} />
    </Provider>
  );
}
