import { useEffect } from "react";
import useHeaderStore, { HeaderState } from "../stores/useHeaderStore";

const useHeader = ({
  title,
  showBack = false,
  showHome = false,
  canAccessAdmin = false,
}: Pick<HeaderState, "title"> &
  Pick<Partial<HeaderState>, "showBack" | "showHome" | "canAccessAdmin">) => {
  const { update } = useHeaderStore();

  useEffect(() => {
    update({ title, showBack, showHome, canAccessAdmin });
  }, []);
};

export default useHeader;
