import { useEffect, useState } from "react";

export default function CookieOverlay({visible}: { visible: boolean }) {
    const [show, setShow] = useState(visible);
    
    useEffect(() => {
        if (visible) setShow(true);
        else setTimeout(() => setShow(false), 300);
    }, [visible]);
    
    return show ? (
        <div data-testid="cookie-overlay"
            className={`
        fixed inset-0 bg-black transition-opacity duration-300 z-99
        ${visible ? "opacity-50 pointer-events-none" : "opacity-0 pointer-events-auto"}
      `}
        />
    ) : null;
}