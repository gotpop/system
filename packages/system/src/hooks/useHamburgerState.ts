import { useEffect } from "react"

/**
 * Custom hook that initializes hamburger icon state tracking
 * Tracks popover open/closed state and toggles class on icon-hamburger
 */
export function useHamburgerState() {
  useEffect(() => {
    const header = document.querySelector("header")
    const hamburgerIcon = document.querySelector("icon-hamburger")
    const popover = document.querySelector("[popover]") as HTMLElement & {
      hidePopover?: () => void
    }

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

    // Safari bug fix: reset popover state when crossing desktop breakpoint
    const mediaQuery = window.matchMedia("(width >= 1480px)")

    const handleBreakpointChange = () => {
      if (popover.hidePopover) {
        popover.hidePopover()
        hamburgerIcon.classList.remove("is-active")
      }
    }

    checkPopoverState()

    if (!mediaQuery.matches && popover.hidePopover) {
      popover.hidePopover()
      hamburgerIcon.classList.remove("is-active")
    }

    popover.addEventListener("toggle", handleToggle)
    mediaQuery.addEventListener("change", handleBreakpointChange)

    const observer = new MutationObserver(() => {
      checkPopoverState()
    })

    observer.observe(popover, {
      attributes: true,
      attributeFilter: ["popover"],
    })

    return () => {
      popover.removeEventListener("toggle", handleToggle)
      mediaQuery.removeEventListener("change", handleBreakpointChange)
      observer.disconnect()
    }
  }, [])
}
