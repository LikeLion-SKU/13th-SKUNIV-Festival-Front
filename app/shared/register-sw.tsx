// app/shared/register-sw.tsx
"use client";

import { useEffect } from "react";
// @ts-expect-error
import { registerSW } from "virtual:pwa-register";

export default function RegisterSW() {
  useEffect(() => {
    registerSW({
      onOfflineReady() {
      },
    });
  }, []);

  return null;
}
