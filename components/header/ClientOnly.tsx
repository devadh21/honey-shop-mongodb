//By rendering ThemeProvider (and the theme-dependent components like Navbar) only after the client is mounted,
// you prevent mismatches between SSR and client render. 
// This eliminates the hydration error.

"use client";

import { useEffect, useState } from "react";

export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
}
