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
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="images/logo.png" />
        <link rel="manifest" href="images/manifest.json" />
        {/* <!-- fonts --> */}
        {/* <!-- Mulish font --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Tajawal font --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;700;800&display=swap"
          rel="stylesheet"
        />
        <link itemprop="image" href="images/logo.png" />
        <title>Omega Stream</title>
        <meta name="description" content="Streaming made easy" />
        <meta property="og:title" content="Omega Stream" />
        <meta property="og:description" content="Streaming made easy" />
        <meta property="og:image" content="images/logo.png" />
        <meta name="twitter:title" content="Omega Stream" />
        <meta name="twitter:description" content="Streaming made easy" />
        <meta name="twitter:image" content="images/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
