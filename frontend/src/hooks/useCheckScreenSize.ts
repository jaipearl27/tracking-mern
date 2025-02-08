"use client";
import { useState, useEffect } from "react";

function useCheckScreenSize(screenSize: number) {
  const [matches, setMatches] = useState<any>();

  useEffect(() => {
    if (!matches) {
      setMatches(window?.matchMedia(`(max-width: ${screenSize}px)`).matches);
    }

    const mediaQueryList = window.matchMedia(`(max-width: ${screenSize}px)`);

    const updateMatches = (event: any) => {
      setMatches(event.matches);
    };

    // Set the initial state
    setMatches(mediaQueryList.matches);

    // Add a listener for changes
    mediaQueryList.addEventListener("change", updateMatches);

    // Cleanup listener on component unmount
    return () => {
      mediaQueryList.removeEventListener("change", updateMatches);
    };
  }, [screenSize]);

  return matches;
}

export default useCheckScreenSize;
