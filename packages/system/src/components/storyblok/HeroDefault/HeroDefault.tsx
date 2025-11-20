import { useId } from "react"
import type { HeroDefaultStoryblok } from "../../../types/storyblok-components"
import { CustomElement } from "../../ui/CustomElement"
import { RichText } from "../RichText"
import { Typography } from "../Typography"

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
