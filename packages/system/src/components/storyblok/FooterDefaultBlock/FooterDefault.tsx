import type {
  FooterDefaultStoryblok,
  LinkListStoryblok,
  LogoDefaultStoryblok,
} from "../../../types/storyblok-components"
import { LinkList } from "../LinkList/LinkList"
import { LogoDefault } from "../LogoDefault/LogoDefault"
import { Typography } from "../Typography/Typography"
import "./FooterDefault.css"

export interface FooterData {
  logo: LogoDefaultStoryblok | null
  nav: LinkListStoryblok[]
  copyright: string
}

interface FooterDefaultProps {
  blok: FooterDefaultStoryblok
}

export function FooterDefault({ blok }: FooterDefaultProps): React.JSX.Element {
  const { logo, nav } = blok
  const copyright = `© GotPop ${new Date().getFullYear()}`

  const viewData: FooterData = {
    logo: (logo?.[0] as FooterData["logo"]) || null,
    nav: (nav as FooterData["nav"]) || [],
    copyright,
  }

  const {
    logo: processedLogo,
    nav: processedNav,
    copyright: processedCopyright,
  } = viewData
  const hasNav = processedNav.length > 0
  const hasLogo = processedLogo !== null

  return (
    <footer className="footer">
      <div className="footer-content">
        {hasLogo && <LogoDefault blok={processedLogo} />}
        {hasNav && (
          <nav className="footer-nav">
            {processedNav.map((linkList) => (
              <LinkList key={linkList._uid} blok={linkList} />
            ))}
          </nav>
        )}
      </div>

      <Typography
        className="copyright"
        tag="small"
        variant="text-xs"
        shade="dimmed"
      >
        {processedCopyright}
      </Typography>
    </footer>
  )
}
