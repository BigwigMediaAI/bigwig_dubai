"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      mirror: false,
    });

    // 🔑 REQUIRED for Next.js App Router
    AOS.refresh();
  }, []);

  return null;
}
