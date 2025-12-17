"use client"

import { useId } from "react"
import { useClickOutside } from "../../../hooks/useClickOutside"
import { useNavigationToggle } from "./useNavigationToggle"
import "./ButtonToggleMenu.css"
import { CustomElement } from "../CustomElement"

interface ButtonToggleMenuClientProps {
  navId: string
}

export function ButtonToggleMenu({ navId }: ButtonToggleMenuClientProps) {
  const { isExpanded, toggleMenu, closeMenu } = useNavigationToggle(navId)
  const id = useId()

  useClickOutside(navId, isExpanded, closeMenu)

  return (
    <CustomElement tag="button-toggle">
      <button
        aria-controls={navId}
        aria-expanded={isExpanded}
        aria-haspopup="true"
        aria-label="Toggle navigation"
        id={id}
        onClick={toggleMenu}
        type="button"
        popoverTarget={navId}
      >
        <CustomElement tag="icon-hamburger"></CustomElement>
        <span hidden>Toggle navigation</span>
      </button>
    </CustomElement>
  )
}
