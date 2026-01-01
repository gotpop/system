import Link from "next/link"
import type { LogoDefaultStoryblok } from "../../../types/storyblok-components"
import { getStoryblokLinkProps } from "../../../utils/storyblok"
import { IconLogoSVG } from "../../icons"
import { CustomElement } from "../../ui/CustomElement"
import "./LogoDefault.css"

interface LogoDefaultProps {
  blok: LogoDefaultStoryblok
}

export function LogoDefault({
  blok: { link },
}: LogoDefaultProps): React.JSX.Element {
  const linkProps = getStoryblokLinkProps(link)

  return (
    <CustomElement tag="logo-main" className="logo-main">
      <Link
        className="link-logo"
        href={linkProps.href}
        rel={linkProps.rel}
        target={linkProps.target}
      >
        <IconLogoSVG />
        <span className="logo-text">GotPop</span>
      </Link>
    </CustomElement>
  )
}
