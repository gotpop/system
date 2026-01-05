"use client"

import { useId } from "react"
import { CustomElement } from "../../ui/CustomElement"
import { Icon, type IconName } from "../Icon/Icon"
import "./CardsControl.css"

export interface CardsControlOption {
  value: string
  label: string
  icon?: IconName
}

interface CardsControlProps {
  label: string
  value: string
  onChange: (value: string) => void
  options: CardsControlOption[]
  className?: string
  style?: React.CSSProperties
}

export function CardsControl({
  label,
  value,
  onChange,
  options,
  className = "select-wrap",
  style = undefined,
}: CardsControlProps) {
  const selectId = useId()

  return (
    <CustomElement tag="select-option" className={className} style={style}>
      <label htmlFor={selectId} className="select-label">
        {label}:
      </label>
      <select
        id={selectId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="select"
      >
        <button type="button" className="selected-button">
          <selectedcontent className="selected-content"></selectedcontent>
        </button>
        {options
          .filter((option) => option.value && option.label)
          .map((option) => (
            <option key={option.value} value={option.value}>
              {option.icon && <Icon name={option.icon} size={16} />}
              {option.label}
            </option>
          ))}
      </select>
    </CustomElement>
  )
}
