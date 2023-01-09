import AllLogin from "./../../component/UI/pages/login/sections/all-login";
import enLogin from "./../../public/translations/en/pages/login/login-en.json";
import arLogin from "./../../public/translations/ar/pages/login/login-ar.json";
import { useTranslate } from './../../hooks/useTranslate';
function Login({ onHandleLinksActiveClosed }) {
  const { t } = useTranslate(enLogin, arLogin);
  return (
    <main onClick={onHandleLinksActiveClosed}>
      <AllLogin t={t.loginPage} />
    </main>
  );
}
export default Login;
