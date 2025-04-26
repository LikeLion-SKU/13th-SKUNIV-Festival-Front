import { useEffect } from "react";
import useHeaderStore, { HeaderStoreProps } from "../stores/useHeaderStore";

const useHeader = ({
  title,
  showBack = false,
  showHome = false,
}: Pick<HeaderStoreProps, "title"> & Pick<Partial<HeaderStoreProps>, "showBack" | "showHome">) => {
  const { update } = useHeaderStore();

  useEffect(() => {
    update({ title, showBack: showBack, showHome: showHome });
  }, []);
};

export default useHeader;
