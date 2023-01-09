import Landing from "./../component/UI/pages/home/sections/landing/landing";
import HowWork from "./../component/UI/pages/home/sections/howWork/how-work";
import Features from "./../component/UI/pages/home/sections/features/features";
import Comparison from "./../component/UI/pages/home/sections/comparison/comparison";
import PricingSection from "./../component/UI/pages/home/sections/pricingSection/pricing-section";
import PricingAsks from "./../component/UI/pages/home/sections/PricingAsks/pricing-asks";
import enHome from "./../public/translations/en/pages/home/home-en.json";
import arHome from "./../public/translations/ar/pages/home/home-ar.json";
import { useTranslate } from "./../hooks/useTranslate";
function Home({ onHandleLinksActiveClosed }) {
  const { t, locale } = useTranslate(enHome, arHome);

  return (
    <main className="home" onClick={onHandleLinksActiveClosed}>
      <Landing t={t.home.landing} locale={locale} />
      <HowWork t={t.home.howWork} />
      <Features t={t.home.features} />
      <Comparison t={t.home.comparison} />
      <PricingSection t={t.home.pricing} />
      <PricingAsks t={t.home.asks} />
    </main>
  );
}

export default Home;
