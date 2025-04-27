import { useEffect } from "react";
import useHeaderStore, { HeaderStoreProps } from "../stores/useHeaderStore";

const useHeader = ({
  title,
  showBack = false,
  showHome = false,
  canAccessAdmin = false,
}: Pick<HeaderStoreProps, "title"> &
  Pick<Partial<HeaderStoreProps>, "showBack" | "showHome" | "canAccessAdmin">) => {
  const { update } = useHeaderStore();

  useEffect(() => {
    update({ title, showBack, showHome, canAccessAdmin });
  }, []);
};

export default useHeader;
