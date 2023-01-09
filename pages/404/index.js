import enNotFound from "./../../public/translations/en/pages/404/404-en.json";
import arNotFound from "./../../public/translations/ar/pages/404/404-ar.json";
import { useTranslate } from "./../../hooks/useTranslate";

function NotFound({ onHandleLinksActiveClosed }) {
  const { t } = useTranslate(enNotFound, arNotFound);
  return (
    <div className="container not-found">
      <div onClick={onHandleLinksActiveClosed}>{t.notFound.notFound}</div>
    </div>
  );
}

export default NotFound;
