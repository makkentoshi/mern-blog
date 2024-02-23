import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation(); // Fix: Correctly destructure the 'pathname' property
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

export default ScrollToTop;