import { useId } from "react"
import type {
  ConfigStoryblok,
  NavDefaultStoryblok,
} from "../../../types/storyblok-components"
import { ButtonToggleMenu } from "../../ui/ButtonToggleMenu"
import "./NavDefault.css"
import { CustomElement } from "../../ui/CustomElement"

interface NavDefaultProps {
  blok: NavDefaultStoryblok
  blocks?: React.ReactNode
  config?: ConfigStoryblok | null
  onOpenChange?: (isOpen: boolean) => void
}

export function NavDefault({ blok: _blok, blocks }: NavDefaultProps) {
  const navId = useId()

  return (
    <>
      <ButtonToggleMenu navId={navId} />
      <CustomElement
        tag="popover-nav"
        className="nav-wrapper"
        popover="auto"
        id={navId}
      >
        <nav className="nav" aria-label="Main navigation">
          {blocks}
        </nav>
      </CustomElement>
    </>
  )
}
