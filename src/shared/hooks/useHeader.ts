import { useEffect } from "react";
import useHeaderStore, { HeaderState } from "../stores/useHeaderStore";

const useHeader = ({
  title,
  showBack = false,
  showHome = false,
  canAccessAdmin = false,
  canAccessLost = false,
}: Pick<HeaderState, "title"> &
  Pick<Partial<HeaderState>, "showBack" | "showHome" | "canAccessAdmin" | "canAccessLost">) => {
  const { update } = useHeaderStore();

  useEffect(() => {
    update({ title, showBack, showHome, canAccessAdmin, canAccessLost });
  }, [title]);
};

export default useHeader;
