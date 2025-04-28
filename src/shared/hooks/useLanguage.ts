import { useEffect } from "react";
import useLanguageStore, { LanguageState } from "../stores/useLanguageStore";
import { useNavigate } from "react-router";

const useLanguage = (): [LanguageState["locale"], LanguageState["setLang"]] => {
  const { locale: lang, setLang } = useLanguageStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang) {
      navigate("/");
    }
  }, []);

  return [lang, setLang];
};

export default useLanguage;
