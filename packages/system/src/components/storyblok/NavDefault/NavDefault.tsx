"use client"

import { useId } from "react"
import type {
  ConfigStoryblok,
  NavDefaultStoryblok,
} from "../../../types/storyblok-components"
import { ButtonToggleMenu } from "../../ui/ButtonToggleMenu"
import "./NavDefault.css"
import { MEDIA_QUERIES } from "../../../constants/breakpoints"
import { useMediaQuery } from "../../../hooks/useMediaQuery"
import { useInertBody } from "./useInertBody"
import { useNavigationToggle } from "./useNavigationToggle"

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
  const isDesktop = useMediaQuery(MEDIA_QUERIES.xl2)

  const { triggerRef, popoverRef, isOpen, toggleNav, closeNav } =
    useNavigationToggle({
      isDesktop,
      closeOnClickOutside,
      onOpenChange,
    })

  useInertBody(isOpen && !isDesktop)

  return (
    <>
      <ButtonToggleMenu
        ref={triggerRef}
        navId={navId}
        isExpanded={isOpen}
        onToggle={toggleNav}
        onClose={closeNav}
      />
      <div className="nav-wrapper" ref={popoverRef}>
        <nav
          id={navId}
          className="nav"
          aria-label="Main navigation"
          style={{
            display: isDesktop ? "grid" : undefined,
          }}
        >
          {blocks}
        </nav>
      </div>
    </>
  )
}
