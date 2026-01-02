import { useId } from "react"
import "./ButtonToggleMenu.css"
import { CustomElement } from "../CustomElement"

interface ButtonToggleMenuClientProps {
  navId: string
}

export function ButtonToggleMenu({ navId }: ButtonToggleMenuClientProps) {
  const id = useId()

  return (
    <CustomElement tag="button-toggle">
      <button
        aria-controls={navId}
        aria-haspopup="dialog"
        aria-label="Toggle navigation"
        id={id}
        popoverTarget={navId}
        type="button"
      >
        <CustomElement tag="icon-hamburger"></CustomElement>
        <span hidden>Toggle navigation</span>
      </button>
    </CustomElement>
  )
}
