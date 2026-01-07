import type { SbBlokData } from "@storyblok/react"
import { useId } from "react"
import type { RichtextStoryblok } from "../../../types/storyblok-components"
import { CustomElement } from "../../ui/CustomElement"
import { RichText } from "../RichText/RichText"
import { Typography } from "../Typography/Typography"

// Legacy component type - not currently in CMS
export interface HeroDefaultStoryblok extends SbBlokData {
  component: "hero_default"
  heading?: string
  subheading?: RichtextStoryblok
  _uid: string
  [k: string]: any
}

interface HeroDefaultProps {
  blok: HeroDefaultStoryblok
}

export function HeroDefault({ blok }: HeroDefaultProps): React.JSX.Element {
  const { heading, subheading } = blok
  const id = useId()

  return (
    <CustomElement tag="box-grid" aria-labelledby={id}>
      <Typography
        className="hero-home-heading"
        id={id}
        shade="dark"
        tag="h1"
        variant="hero"
      >
        {heading}
      </Typography>
      {subheading && <RichText content={subheading} />}
    </CustomElement>
  )
}
