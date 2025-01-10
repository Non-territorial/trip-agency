import { useEffect } from "react";

export function useMenu() {
    useEffect(() => {
        const trigger = document.querySelector(".menu-trigger");
        const menuContent = document.querySelector(".menu-content");

        const toggleMenu = () => {
            if (menuContent) {
                menuContent.style.display =
                    menuContent.style.display === "flex" ? "none" : "flex";
            }
        };

        const closeMenu = (event) => {
            if (
                menuContent &&
                !menuContent.contains(event.target) &&
                trigger &&
                !trigger.contains(event.target)
            ) {
                menuContent.style.display = "none";
            }
        };

        if (trigger) {
            trigger.addEventListener("click", toggleMenu);
            document.addEventListener("click", closeMenu);
        }

        return () => {
            if (trigger) trigger.removeEventListener("click", toggleMenu);
            document.removeEventListener("click", closeMenu);
        };
    }, []);
}