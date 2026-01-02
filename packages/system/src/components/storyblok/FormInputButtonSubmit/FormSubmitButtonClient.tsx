"use client"

import { useRef } from "react"
import { AtSignIcon, type AtSignIconHandle } from "./IconAtSign"

interface FormSubmitButtonClientProps {
  label: string
}

export function FormSubmitButtonClient({ label }: FormSubmitButtonClientProps) {
  const iconRef = useRef<AtSignIconHandle>(null)

  const handleMouseEnter = () => {
    iconRef.current?.startAnimation()
  }

  const handleMouseLeave = () => {
    iconRef.current?.stopAnimation()
  }

  return (
    <button
      type="submit"
      className="form-submit-button"
      aria-label={label}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text">{label}</span>
      <AtSignIcon ref={iconRef} size={16} />
    </button>
  )
}
