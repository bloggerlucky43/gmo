import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PageLoader } from "./PageLoader";

export const AppLoader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [location.key]);

  return loading ? <PageLoader /> : null;
};
