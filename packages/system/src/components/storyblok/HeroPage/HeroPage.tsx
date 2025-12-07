import Image from "next/image"
import type {
  ConfigStoryblok,
  HeroPageStoryblok,
  PageDefaultStoryblok,
} from "../../../types/storyblok-components"
import { getMeta } from "../../../utils/card-utils"
import { CustomElement } from "../../ui/CustomElement"
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

  const tagList = tags.map((tag) => (
    <span key={tag} className="tag">
      {tag}
    </span>
  ))

  return (
    <CustomElement
      tag="box-grid"
      className="hero-page"
      style={{
        viewTransitionName: viewTransitionName,
      }}
    >
      {image && (
        <div className="image-container">
          <Image
            src={image.filename}
            alt={heading || "Card image"}
            width={640}
            height={364}
            className="hero-image"
            style={{
              viewTransitionName: `${viewTransitionName}-image`,
            }}
          />
        </div>
      )}
      <div className="content">
        <Typography
          tag="h3"
          variant="text-xl"
          shade="dark"
          styles={{
            viewTransitionName: `${viewTransitionName}-heading`,
          }}
        >
          {heading}
        </Typography>
        <div className="meta">
          <div
            className="tags"
            style={{
              viewTransitionName: `${viewTransitionName}-tags`,
            }}
          >
            {tagList}
          </div>
        </div>

        {subheading && (
          <div className="subheading">
            <RichText content={subheading} />
          </div>
        )}
      </div>
    </CustomElement>
  )
}
