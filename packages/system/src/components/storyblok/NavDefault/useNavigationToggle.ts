import { useEffect, useRef, useState } from "react"

interface UseNavigationToggleProps {
  isDesktop: boolean
  closeOnClickOutside?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

export function useNavigationToggle({
  isDesktop,
  closeOnClickOutside = true,
  onOpenChange,
}: UseNavigationToggleProps) {
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const popoverRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const nav = popoverRef.current

    if (!nav) return

    if (isDesktop) {
      nav.removeAttribute("popover")
    } else {
      nav.setAttribute("popover", "auto")
    }
  }, [isDesktop])

  useEffect(() => {
    const popover = popoverRef.current

    if (!popover) return

    try {
      if (isOpen) {
        popover.showPopover()
      } else {
        popover.hidePopover()
      }
    } catch (e) {
      console.warn(`${isOpen ? "showPopover" : "hidePopover"} failed:`, e)
    }

    onOpenChange?.(isOpen)
  }, [isOpen, onOpenChange])

  // Listen to native popover toggle events
  useEffect(() => {
    const popover = popoverRef.current

    if (!popover) return

    const handleToggle = (event: Event) => {
      const isPopoverOpen = (event.target as HTMLElement).matches(
        ":popover-open"
      )
      setIsOpen(isPopoverOpen)
    }

    popover.addEventListener("toggle", handleToggle)
    return () => popover.removeEventListener("toggle", handleToggle)
  }, [])

  useEffect(() => {
    if (!closeOnClickOutside || !isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const popover = popoverRef.current
      const trigger = triggerRef.current

      if (
        popover &&
        trigger &&
        !popover.contains(event.target as Node) &&
        !trigger.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, closeOnClickOutside])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return {
    triggerRef,
    popoverRef,
    isOpen,
    toggleNav,
    closeNav: () => setIsOpen(false),
  }
}
