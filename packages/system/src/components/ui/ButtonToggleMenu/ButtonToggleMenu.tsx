"use client"

import { useId } from "react"
import "./ButtonToggleMenu.css"
import { CustomElement } from "../CustomElement"

interface ButtonToggleMenuClientProps {
  navId: string
  isExpanded?: boolean
  onToggle?: () => void
  onClose?: () => void
  ref?: React.RefObject<HTMLButtonElement | null>
}

export function ButtonToggleMenu({
  navId,
  isExpanded,
  onToggle,
  ref,
}: ButtonToggleMenuClientProps) {
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
}
