import Image from "next/image"
import type {
  ConfigStoryblok,
  HeroPageStoryblok,
  PageDefaultStoryblok,
} from "../../../types/storyblok-components"
import { getMeta } from "../../../utils/card-utils"
import { CustomElement } from "../../ui/CustomElement"
import { Tags } from "../../ui/Tags"
import { Typography } from "../Typography/Typography"
import "./HeroPage.css"
import { RichText } from "../RichText"

export interface HeroPageProps {
  blok: HeroPageStoryblok
  metaDataPage: PageDefaultStoryblok["meta_data_page"]
  config?: ConfigStoryblok | null
}

export function HeroPage({ blok, metaDataPage }: HeroPageProps) {
  const { tags, viewTransitionName } = getMeta(metaDataPage)
  const { heading, subheading, image } = blok

  return (
    <CustomElement
      tag="box-grid"
      className="hero-page"
      id="hero-page"
      style={{
        viewTransitionName: viewTransitionName,
      }}
    >
      <figure className="figure">
        <Image
          src={image?.filename || ""}
          alt={heading || "Card image"}
          width={640}
          height={364}
          className="image"
        />
      </figure>
      <div className="content">
        <Typography tag="h3" variant="text-xl" shade="dark">
          {heading}
        </Typography>
        <Tags tags={tags} />
        {subheading && (
          <div className="subheading">
            <RichText content={subheading} />
          </div>
        )}
      </div>
    </CustomElement>
  )
}
