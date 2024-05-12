import { useEffect, useRef, useState } from "react";
export const usePopupClosed = ({ initialIsVisible }) => {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef(null);
    const handleHideDropdown = (event) => {
        if (event.key === "Escape") {
            setIsComponentVisible(false);
        }
    };
    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setIsComponentVisible(false);
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", handleHideDropdown, true);
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("keydown", handleHideDropdown, true);
            document.removeEventListener("click", handleClickOutside, true);
        };
    });
    return { ref, isComponentVisible, setIsComponentVisible };
};
