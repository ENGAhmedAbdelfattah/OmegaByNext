import PricingLanding from "./../../component/UI/pages/pricing/sections/PricingLanding/pricing-landing";
import PricingBlock from "./../../component/UI/pages/pricing/sections/PricingBlock/pricing-block";
import PricingAsks from "./../../component/UI/pages/home/sections/PricingAsks/pricing-asks";
import enPricing from "./../../public/translations/en/pages/pricing/pricing-en.json";
import arPricing from "./../../public/translations/ar/pages/pricing/pricing-ar.json";
import enHome from "./../../public/translations/en/pages/home/home-en.json";
import arHome from "./../../public/translations/ar/pages/home/home-ar.json";
import { useTranslate } from "./../../hooks/useTranslate";
function Pricing({ onHandleLinksActiveClosed }) {
    const { t: tPricing } = useTranslate(enPricing, arPricing);
    const { t:tHome } = useTranslate(enHome, arHome);

  return (
    <main className="pricing-page" onClick={onHandleLinksActiveClosed}>
      <PricingLanding t={tPricing.pricingPage.landing} />
      <PricingBlock t={tHome.home.pricing} />
      <PricingAsks t={tHome.home.asks} />
    </main>
  );
}

export default Pricing;
