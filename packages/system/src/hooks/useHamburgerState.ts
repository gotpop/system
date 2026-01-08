import { useEffect } from "react"

/**
 * Custom hook that initializes hamburger icon state tracking
 * Tracks popover open/closed state and toggles class on icon-hamburger
 */
export function useHamburgerState() {
  useEffect(() => {
    const header = document.querySelector("header")
    const hamburgerIcon = document.querySelector("icon-hamburger")
    const popover = document.querySelector("[popover]")

    if (!header || !hamburgerIcon || !popover) {
      console.warn("Hamburger state: Required elements not found")
      return
    }

    const handleToggle = (event: Event) => {
      const toggleEvent = event as ToggleEvent

      if (toggleEvent.newState === "open") {
        hamburgerIcon.classList.add("is-active")
      } else {
        hamburgerIcon.classList.remove("is-active")
      }
    }

    const checkPopoverState = (): void => {
      const isOpen = popover.matches(":popover-open")

      hamburgerIcon.classList.toggle("is-active", isOpen)
    }

    checkPopoverState()

    popover.addEventListener("toggle", handleToggle)

    const observer = new MutationObserver(() => {
      checkPopoverState()
    })

    observer.observe(popover, {
      attributes: true,
      attributeFilter: ["popover"],
    })

    return () => {
      popover.removeEventListener("toggle", handleToggle)
      observer.disconnect()
    }
  }, [])
}
