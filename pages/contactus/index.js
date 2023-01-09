import ContactLanding from "./../../component/UI/pages/contactUs/sections/contactLanding/contact-landing";
import ContactItems from "./../../component/UI/pages/contactUs/sections/contactItems/contact-items";
import ContactForm from "./../../component/UI/pages/contactUs/sections/contactForm/contact-form";
import enContactus from "./../../public/translations/en/pages/contactus/contactus-en.json";
import arContactus from "./../../public/translations/ar/pages/contactus/contactus-ar.json";
import enValidate from "./../../public/translations/en/layout/validate/validate-en.json";
import arValidate from "./../../public/translations/ar/layout/validate/validate-ar.json";
import { useTranslate } from "./../../hooks/useTranslate";

function ContactUs({ onHandleLinksActiveClosed }) {
  const { t } = useTranslate(enContactus, arContactus);
  const { t: tValidate } = useTranslate(enValidate, arValidate);
  return (
    <main className="contact-page" onClick={onHandleLinksActiveClosed}>
      <ContactLanding t={t.contactsPage.contactLanding} />
      <ContactItems t={t.contactsPage.contactItems} />
      <ContactForm
        t={t.contactsPage.contactForm}
        tValidate={tValidate.errorMsg}
      />
    </main>
  );
}
export default ContactUs;
