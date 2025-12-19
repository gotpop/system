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
import { useNavigationToggle } from "./useNavigationToggle"

interface NavDefaultProps {
  blok: NavDefaultStoryblok
  blocks?: React.ReactNode
  config?: ConfigStoryblok | null
  onOpenChange?: (isOpen: boolean) => void
}

export function NavDefault({
  blok: _blok,
  blocks,
  onOpenChange,
}: NavDefaultProps) {
  const navId = useId()
  const isDesktop = useMediaQuery(MEDIA_QUERIES.xl2)

  const { triggerRef, popoverRef, isOpen, toggleNav, closeNav } =
    useNavigationToggle({
      isDesktop,
      onOpenChange,
    })

  return (
    <>
      <ButtonToggleMenu
        ref={triggerRef}
        navId={navId}
        isExpanded={isOpen}
        onToggle={toggleNav}
        onClose={closeNav}
      />
      <div className="nav-wrapper" ref={popoverRef} popover="auto">
        <nav id={navId} className="nav" aria-label="Main navigation">
          {blocks}
        </nav>
      </div>
    </>
  )
}
