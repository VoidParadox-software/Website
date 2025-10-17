
import * as React from "react"

/**
 * @file This file defines a custom hook `useIsMobile` to detect if the user is on a mobile device.
 */

const MOBILE_BREAKPOINT = 768

/**
 * A custom React hook that returns `true` if the window width is less than a defined mobile breakpoint.
 * It uses `window.matchMedia` to efficiently listen for changes in screen size.
 *
 * @returns {boolean} `true` if the screen is considered mobile, `false` otherwise.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
