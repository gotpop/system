import { useEffect, useRef, useState } from "react"

interface UseNavigationToggleProps {
  isDesktop: boolean
  closeOnClickOutside?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

export function useNavigationToggle({
  isDesktop,
  onOpenChange,
}: UseNavigationToggleProps) {
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const popoverRef = useRef<HTMLDivElement | null>(null)
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

    if (!popover || isDesktop) return

    if (isOpen) {
      popover.showPopover()
    } else {
      popover.hidePopover()
    }

    onOpenChange?.(isOpen)
  }, [isOpen, onOpenChange, isDesktop])

  // Listen to native popover toggle events
  // This is the bridge between react and the native popover element
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
