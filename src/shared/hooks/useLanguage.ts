import { useEffect } from "react";
import useLanguageStore, { LanguageState } from "../stores/useLanguageStore";
import { useNavigate } from "react-router";
import i18n from "../lib/i18n";

const useLanguage = (): [LanguageState["locale"], LanguageState["setLang"]] => {
  const { locale: lang, setLang } = useLanguageStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!lang) {
      navigate("/");
    } else {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return [lang, setLang];
};

export default useLanguage;
