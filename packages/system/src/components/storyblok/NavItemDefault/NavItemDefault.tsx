import { CustomElement, Icon } from "../../"
import type {
  ConfigStoryblok,
  NavItemDefaultStoryblok,
} from "../../../types/storyblok-components"
import { cn } from "../../../utils/cn"
import { getStoryblokLinkProps } from "../../../utils/storyblok"
import type { IconName } from "../../ui/Icon/Icon"
import "./NavItemDefault.css"

interface NavItemDefaultProps {
  blok: NavItemDefaultStoryblok
  config?: ConfigStoryblok | null
}

export function NavItemDefault({
  blok,
  config,
}: NavItemDefaultProps): React.JSX.Element {
  const linkProps = getStoryblokLinkProps(blok.link)
  const { href, target, rel } = linkProps

  const hasText = Boolean(blok.text)
  const hasIcon = Boolean(blok.icon)
  const hasBoth = hasText && hasIcon
  const hasTextOnly = hasText && !hasIcon
  const hasIconOnly = hasIcon && !hasText

  // log config for debugging
  console.log("NavItemDefault config:", config)

  if (!blok.link || href === "#") {
    return <span className="nav-item">{blok.text}</span>
  }

  const classNames = cn(
    "nav-item",
    hasTextOnly && "has-text",
    hasIconOnly && "has-icon",
    hasBoth && "has-text-and-icon"
  )

  const renderContent = () => {
    if (hasBoth) {
      return (
        <>
          <span>{blok.text}</span>
          <Icon name={blok.icon as IconName} size={32} />
        </>
      )
    }

    if (hasTextOnly) {
      return blok.text
    }

    if (hasIconOnly) {
      return <Icon name={blok.icon as IconName} size={32} />
    }

    return null
  }

  return (
    <CustomElement tag="nav-item" className={classNames}>
      <a href={href} target={target} rel={rel}>
        {renderContent()}
      </a>
    </CustomElement>
  )
}
