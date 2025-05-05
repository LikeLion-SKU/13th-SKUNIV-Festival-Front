import { useEffect } from "react";
import useHeaderStore, { HeaderState } from "../stores/useHeaderStore";

const useHeader = ({
  title,
  showBack = false,
  showHamburger = false,
  canAccessAdmin = false,
  canAccessLost = false,
  transparent = false,
}: Pick<HeaderState, "title"> &
  Pick<
    Partial<HeaderState>,
    "showBack" | "showHamburger" | "canAccessAdmin" | "canAccessLost" | "transparent"
  >) => {
  const { update } = useHeaderStore();

  useEffect(() => {
    update({ title, showBack, showHamburger, canAccessAdmin, canAccessLost, transparent });
  }, [title]);
};

export default useHeader;
