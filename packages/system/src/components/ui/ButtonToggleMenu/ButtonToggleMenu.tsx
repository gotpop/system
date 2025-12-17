"use client"

import { forwardRef, useId } from "react"
import "./ButtonToggleMenu.css"
import { CustomElement } from "../CustomElement"

interface ButtonToggleMenuClientProps {
  navId: string
  // Optional controlled state
  isExpanded?: boolean
  onToggle?: () => void
  onClose?: () => void
}

export const ButtonToggleMenu = forwardRef<
  HTMLButtonElement,
  ButtonToggleMenuClientProps
>(function ButtonToggleMenu(
  {
    navId,
    isExpanded,
    onToggle,
    // onClose,
  },
  ref
) {
  const id = useId()

  return (
    <CustomElement tag="button-toggle">
      <button
        ref={ref}
        aria-controls={navId}
        aria-expanded={isExpanded}
        aria-haspopup="dialog"
        aria-label="Toggle navigation"
        id={id}
        onClick={onToggle}
        type="button"
      >
        <CustomElement tag="icon-hamburger"></CustomElement>
        <span hidden>Toggle navigation</span>
      </button>
    </CustomElement>
  )
})
