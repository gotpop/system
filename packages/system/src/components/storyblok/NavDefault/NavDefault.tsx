import { useId } from "react"
import type {
  ConfigStoryblok,
  NavDefaultStoryblok,
} from "../../../types/storyblok-components"
import { ButtonToggleMenu } from "../../ui/ButtonToggleMenu"
import "./NavDefault.css"

interface NavDefaultProps {
  blok: NavDefaultStoryblok
  blocks?: React.ReactNode
  config?: ConfigStoryblok | null
}

export function NavDefault({
  blok: _blok,
  blocks,
}: NavDefaultProps): React.JSX.Element {
  const navId = useId()

  return (
    <>
      <ButtonToggleMenu navId={navId} />
      <nav className="nav" id={navId} aria-hidden="true" hidden>
        {blocks}
      </nav>
    </>
  )
}
