import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            if (event.type === "keydown" && (event.key === "Escape" || event.key === "Esc")) {
                handler(event);
                return;
            }
            handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        document.addEventListener("keydown", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
            document.removeEventListener("keydown", listener);
        };
    }, [ref, handler]);
};
