"use client";

import { init, push } from "@socialgouv/matomo-next";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const MATOMO_URL = "https://climatelab.matomo.cloud/";
const MATOMO_SITE_ID = "3";

let wentOnce = false;
const MatomoComponent = () => {
  const [initialised, setInitialised] = useState(false);
  useEffect(() => {
    if (MATOMO_URL && MATOMO_SITE_ID && !initialised && !wentOnce) {
      init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
      wentOnce = true;
      setInitialised(true);
    }
  }, []);

  const searchParams = useSearchParams(),
    pathname = usePathname();

  const searchParamsString = searchParams.toString();
  useEffect(() => {
    if (!pathname) return;
    // may be necessary to decodeURIComponent searchParamsString ?
    const url = pathname + (searchParamsString ? "?" + searchParamsString : "");
    push(["setCustomUrl", url]);
    push(["trackPageView"]);
  }, [pathname, searchParamsString]);
  return null;
};

export default function Matomo() {
  return (
    <Suspense>
      <MatomoComponent />
    </Suspense>
  );
}
