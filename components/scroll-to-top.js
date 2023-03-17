import { scrollToTop } from '../helpers/scroll-to-top-event';
import Link from 'next/link'
import { useState, useEffect } from "react";

export default function ScrollToTop() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Link href="/" legacyBehavior scroll={false}>
          <a id="scroll-to-top" onClick={scrollToTop}
            className="bg-black rounded fixed p-[5px] bottom-[40px] right-[40px]
              text-white flex justify-center items-center cursor-pointer border-0
              scroll-to-top-animation"
          >
            <span className="material-symbols-outlined">arrow_upward</span>
          </a>
        </Link>
      )}
    </>
  );
}
