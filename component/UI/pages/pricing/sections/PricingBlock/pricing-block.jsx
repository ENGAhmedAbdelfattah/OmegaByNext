import PricingLists from "./../../../home/sections/pricingSection/blocks/pricing-lists";

function PricingBlock({t}) {
  return (
    <section className="pricing-block">
      <div className="container">
        <PricingLists t={t}/>
      </div>
    </section>
  );
}

export default PricingBlock;
