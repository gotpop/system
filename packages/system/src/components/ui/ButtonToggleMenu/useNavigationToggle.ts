import { useEffect, useState } from "react"
import { MEDIA_QUERIES } from "../../../constants/breakpoints"
import { useMediaQuery } from "../../../hooks/useMediaQuery"

export function useNavigationToggle(navId: string) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isDesktop = useMediaQuery(MEDIA_QUERIES.large)

  const closeMenu = () => {
    if (isDesktop) return

    setIsExpanded(false)
  }

  useEffect(() => {
    const navElement = document.getElementById(navId)

    if (!navElement) return

    const attributes = {
      "aria-hidden": (!isDesktop && !isExpanded).toString(),
      hidden: !isDesktop && !isExpanded ? "" : null,
      popover: !isDesktop ? "auto" : null,
    }

    Object.entries(attributes).forEach(([key, value]) => {
      if (value !== null) {
        navElement.setAttribute(key, value)
      } else {
        navElement.removeAttribute(key)
      }
    })

    if (isDesktop) {
      if (navElement.matches(":popover-open")) {
        navElement.hidePopover()
      }
    } else {
      const shouldShow = isExpanded
      const isOpen = navElement.matches(":popover-open")

      if (shouldShow && !isOpen) {
        navElement.showPopover()
      } else if (!shouldShow && isOpen) {
        navElement.hidePopover()
      }
    }
  }, [navId, isExpanded, isDesktop])

  useEffect(() => {
    if (isDesktop) {
      setIsExpanded(true)
    } else {
      setIsExpanded(false)
    }
  }, [isDesktop])

  const toggleMenu = () => {
    if (isDesktop) return

    setIsExpanded(!isExpanded)
  }

  return { isExpanded, toggleMenu, closeMenu }
}
