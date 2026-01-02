"use client"

import type {
  ConfigStoryblok,
  FormInputButtonSubmitStoryblok,
} from "../../../types/storyblok-components"
import "./FormInputButtonSubmit.css"
import { useRef } from "react"
import { AtSignIcon, type AtSignIconHandle } from "./IconAtSign"

interface FormInputButtonSubmitProps {
  blok: FormInputButtonSubmitStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
}

export function FormInputButtonSubmit({ blok }: FormInputButtonSubmitProps) {
  const label = blok.button_text ?? "Send"
  const iconRef = useRef<AtSignIconHandle>(null)

  const handleMouseEnter = () => {
    iconRef.current?.startAnimation()
  }

  const handleMouseLeave = () => {
    iconRef.current?.stopAnimation()
  }

  return (
    <div className="form-input-button-submit">
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
    </div>
  )
}
