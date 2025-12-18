"use client"

import { useEffect, useId, useRef, useState } from "react"
import type {
  ConfigStoryblok,
  NavDefaultStoryblok,
} from "../../../types/storyblok-components"
import { ButtonToggleMenu } from "../../ui/ButtonToggleMenu"
import "./NavDefault.css"
import { MEDIA_QUERIES } from "../../../constants/breakpoints"
import { useMediaQuery } from "../../../hooks/useMediaQuery"

interface NavDefaultProps {
  blok: NavDefaultStoryblok
  blocks?: React.ReactNode
  config?: ConfigStoryblok | null
  onOpenChange?: (isOpen: boolean) => void
  closeOnClickOutside?: boolean
}

export function NavDefault({
  blok: _blok,
  blocks,
  onOpenChange,
  closeOnClickOutside = true,
}: NavDefaultProps) {
  const navId = useId()
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const popoverRef = useRef<HTMLElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery(MEDIA_QUERIES.xl2)

  useEffect(() => {
    const nav = popoverRef.current
    console.log("Nav element:", nav)
    if (!nav) return

    if (isDesktop) {
      nav.removeAttribute("popover")
      console.log("Removed popover attribute (desktop)")
    } else {
      nav.setAttribute("popover", "auto")
      console.log('Set popover="auto" (mobile)')
    }
    console.log("Nav element:", nav)
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

  // Handle escape key
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

  return (
    <>
      <ButtonToggleMenu
        ref={triggerRef}
        navId={navId}
        isExpanded={isOpen}
        onToggle={toggleNav}
        onClose={() => setIsOpen(false)}
      />
      <nav ref={popoverRef} id={navId} className="nav">
        {blocks}
      </nav>
    </>
  )
}
