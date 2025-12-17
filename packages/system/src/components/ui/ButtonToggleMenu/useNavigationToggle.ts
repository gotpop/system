import { useCallback, useEffect, useState } from "react"
import { MEDIA_QUERIES } from "../../../constants/breakpoints"
import { useMediaQuery } from "../../../hooks/useMediaQuery"
import { useInertBody } from "./useInertBody"

export function useNavigationToggle(navId: string) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isDesktop = useMediaQuery(MEDIA_QUERIES.large)

  useInertBody(isExpanded && !isDesktop)

  const closeMenu = useCallback(() => {
    if (isDesktop) return

    setIsExpanded(false)
  }, [isDesktop])

  useEffect(() => {
    const navElement = document.getElementById(navId)

    if (!navElement) return

    if (isDesktop) {
      navElement.removeAttribute("aria-hidden")
      navElement.removeAttribute("hidden")
      navElement.removeAttribute("popover")
    } else {
      const isHidden = !isExpanded

      navElement.setAttribute("aria-hidden", isHidden.toString())
      navElement.setAttribute("popover", "auto")

      if (isHidden) {
        navElement.setAttribute("hidden", "")
      } else {
        navElement.removeAttribute("hidden")
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
