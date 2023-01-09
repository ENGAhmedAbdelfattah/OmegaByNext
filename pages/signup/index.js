import AllSignUp from "./../../component/UI/pages/signup/sections/all-sign-up";
import enSignUp from "./../../public/translations/en/pages/signup/signup-en.json";
import arSignUp from "./../../public/translations/ar/pages/signup/signup-ar.json";
import { useTranslate } from "./../../hooks/useTranslate";

function SignUp({ onHandleLinksActiveClosed }) {
  const { t } = useTranslate(enSignUp, arSignUp);
  return (
    <main onClick={onHandleLinksActiveClosed}>
      <AllSignUp t={t.signUpPage} />
    </main>
  );
}

export default SignUp;
