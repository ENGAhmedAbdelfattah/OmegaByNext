import { useRouter } from "next/router";

export function useTranslate(enJson,arJson) {
    const { locale } = useRouter();
    let t = enJson;
    switch (locale) {
      case "en":
        t = enJson;
        break;
      case "ar":
        t = arJson;
        break;
      default:
        break;
    }
  return {t, locale};
}